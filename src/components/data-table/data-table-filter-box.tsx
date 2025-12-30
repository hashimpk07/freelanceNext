"use client";

import React from "react";

import { Check, PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface FilterOption {
  value: string;
  label: string;
}

interface DataTableFilterBoxProps {
  label?: string;
  title: string;
  options: FilterOption[];
  filterValue: string[] | null;
  setFilterValue: (value: string[] | null) => void;

  multiple?: boolean;
}

export function DataTableFilterBox({
  label,
  title,
  options,
  filterValue,
  setFilterValue,
  multiple = false,
}: DataTableFilterBoxProps) {
  const selectedValues = React.useMemo(() => {
    return new Set(filterValue ?? []);
  }, [filterValue]);

  const handleSelect = (value: string) => {
    if (!multiple) {
      setFilterValue(filterValue?.[0] === value ? null : [value]);
      return;
    }

    const current = filterValue ?? [];
    const next = new Set(current);

    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }

    setFilterValue(next.size > 0 ? Array.from(next) : null);
  };

  const clearFilters = () => setFilterValue(null);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-muted-foreground">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="border-dashed">
            <PlusCircle className="mr-2 h-4 w-4" />
            {title}

            {selectedValues.size > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />

                {multiple ? (
                  selectedValues.size > 2 ? (
                    <Badge variant="secondary">
                      {selectedValues.size} selected
                    </Badge>
                  ) : (
                    Array.from(selectedValues).map((value) => (
                      <Badge
                        key={value}
                        variant="secondary"
                        className="rounded-sm px-1"
                      >
                        {options.find((o) => o.value === value)?.label ?? value}
                      </Badge>
                    ))
                  )
                ) : (
                  <Badge variant="secondary">
                    {options.find((o) => o.value === filterValue?.[0])?.label}
                  </Badge>
                )}
              </>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[220px] p-0" align="start">
          <Command>
            <CommandInput placeholder={`Search ${title}...`} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup>
                {options.map((option) => {
                  const selected = selectedValues.has(option.value);

                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border",
                          selected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>

              {selectedValues.size > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={clearFilters}
                      className="justify-center text-center"
                    >
                      Clear filters
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
