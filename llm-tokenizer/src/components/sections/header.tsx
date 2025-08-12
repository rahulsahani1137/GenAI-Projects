"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const AImodels = [
    {
        value: "o200k_base",
        label: "o200k_base",
    },
]

const Header = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className='flex w-full justify-between items-center text-black pb-6'>
            <div className='text-5xl font-semibold tracking-tight'>LLM Tiktokenizer</div>
            <div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-auto min-w-40 justify-between"
                        >
                            {value
                                ? AImodels.find((model) => model.value === value)?.label
                                : "Select model"}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search models..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No models found.</CommandEmpty>
                                <CommandGroup>
                                    {AImodels.map((model) => (
                                        <CommandItem
                                            key={model.value}
                                            value={model.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue)
                                                setOpen(false)
                                            }}
                                        >
                                            {model.label}
                                            <Check
                                                className={cn(
                                                    "ml-auto",
                                                    value === model.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default Header