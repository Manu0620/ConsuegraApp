// Dependencies: npm install react-phone-number-input lucide-react

"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import React, { useState } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

export const Input46 = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, onChange, ...props }, ref) => {
    const [ inputValue, setValue ] = useState(value);

  return (
    <div className="space-y-2" dir="ltr">
      <RPNInput.default
        className= {cn(
            className,
            "flex shadow-sm"
        )}
        flagComponent={FlagComponent}
         countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        defaultCountry="DO"
        countries={["DO", "US", "CA", "MX", "CO"]}
        id="input-46"
        placeholder="(123) 456-7890"
        value={inputValue?.toString()}
        onChange={(newValue) => {
          setValue(newValue ?? "")
          value = newValue;
        }}
        {...props}
      />
    </div>
  );
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        className="-ml-px rounded-br-xl rounded-tr-xl shadow-none focus-visible:z-10"
        ref={ref}
        {...props}
      />
    );
  },
);

PhoneInput.displayName = "PhoneInput";

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: { label: string; value: RPNInput.Country }[];
};

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as RPNInput.Country);
  };

  return (
    <div className="relative inline-flex bg-red-800/25 focus:bg-red-800/50 items-center self-stretch rounded-bl-xl rounded-tl-xl border border-input py-2 pe-2 ps-3 text-muted-foreground ring-offset-background transition-shadow focus-within:z-10 focus-within:border-ring focus-within:text-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
      <div className="inline-flex items-center gap-1" aria-hidden="true">
        <FlagComponent country={value} countryName={value} aria-hidden="true" />
        <span className="text-muted-foreground/80">
          <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <select
        disabled={disabled}
        value={value || ""}
        onChange={handleSelect}
        className="absolute inset-0 text-sm opacity-0 rounded-xl"
      >
        {options
          .filter((x) => x.value)
          .map((option) => (
            <option key={option.value || "empty"} value={option.value}>
              {option.label} {option.value && `+${RPNInput.getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? <Flag title={countryName} /> : <Phone size={16} aria-hidden="true" />}
    </span>
  );
};
