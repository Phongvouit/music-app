"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface TimeLineProps {
  value?: number;
  duration: number;
  onChange?: (value: number) => void 
}

const TimeLineAudio: React.FC<TimeLineProps> = ({ value = 0, duration, onChange }) => {
    const handleChange = (newValue: number[]) => {
        onChange?.(newValue[0])
    }
  return (
    <RadixSlider.Root
      className="
        relative
    flex
    items-center
    select-none
    touch-none
    w-full
    "
      defaultValue={[0]}
      value={[value]}
      max={duration / 1000}
      step={1}
      onValueChange={handleChange}
    >
      <RadixSlider.Track
        className="
        bg-neutral-600
        relative
        grow 
        rounded-full 
        h-[3px]
        "
      >
        <RadixSlider.Range
          className="
            absolute 
            bg-white 
            rounded-full 
            h-full"
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block w-3 h-3 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};

export default TimeLineAudio;
