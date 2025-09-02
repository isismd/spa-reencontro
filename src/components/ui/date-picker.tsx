import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDate, parseYmdToLocalDate } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date?: Date) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "June 01, 2025",
  disabled = false,
}: DatePickerProps) {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date | undefined>(undefined);

  React.useEffect(() => {
    if (value) {
      setInputValue(formatDate(value));
      setMonth(value);
    } else {
      setInputValue("");
    }
  }, [value]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setInputValue(raw);

    const parsed = parseYmdToLocalDate(raw) ?? new Date(raw);
    if (parsed instanceof Date && !isNaN(parsed.getTime())) {
      onChange?.(parsed);
      setMonth(parsed);
    } else {
      onChange?.(undefined);
    }
  }

  function handleCalendarSelect(d?: Date) {
    onChange?.(d);
    setInputValue(d ? formatDate(d) : "");
    setOpen(false);
  }

  return (
    <div className="relative flex gap-2">
      <Input
        id="date"
        value={inputValue}
        placeholder={placeholder}
        className="bg-background pr-10"
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        disabled={disabled}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date-picker"
            variant="ghost"
            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            onClick={() => setOpen((prev) => !prev)}
            disabled={disabled}
          >
            <CalendarIcon className="size-3.5" />
            <span className="sr-only">Select date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={handleCalendarSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
