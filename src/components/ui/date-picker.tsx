"use client";

import { format, getMonth, getYear, setMonth, setYear } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
interface DatePickerProps {
  label?: string;
  date?: Date | null;
  onChange?: (date: Date | null) => void;
}
export function DatePicker({ label, date, onChange }: DatePickerProps) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, i) => 2000 + i,
  );

  const [visibleMonth, setVisibleMonth] = React.useState<Date>(
    date ?? new Date(),
  );

  React.useEffect(() => {
    if (date) setVisibleMonth(date);
  }, [date]);

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "yyyy-MM-dd") : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          {/* Month / Year dropdowns */}
          <div className="flex gap-2 p-2">
            <Select
              value={months[getMonth(visibleMonth)]}
              onValueChange={(month) =>
                setVisibleMonth(setMonth(visibleMonth, months.indexOf(month)))
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={getYear(visibleMonth).toString()}
              onValueChange={(year) =>
                setVisibleMonth(setYear(visibleMonth, Number(year)))
              }
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y.toString()}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* react-day-picker calendar */}
          <DayPicker
            mode="single"
            selected={date ?? undefined}
            month={visibleMonth}
            onMonthChange={setVisibleMonth}
            onSelect={(d) => onChange?.(d ?? null)}
            disabled={{ after: new Date() }}
            classNames={{
              caption_label: "hidden",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
