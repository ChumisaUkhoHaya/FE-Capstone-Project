import CameraCutout from "./assets/CameraCutout";
import Wifi from "./assets/Wifi";
import Signal from "./assets/Signal";
import Battery from "./assets/Battery";

export default function EntryP({ className = "" }: EntryPProps) {
  return (
    <div className={`flex w-full items-start rounded-[28px] ${className}`}>
      <div className="flex h-full w-full flex-shrink-0 flex-col overflow-clip rounded-[28px] border-8 border-solid border-zinc-300 bg-purple-50 pt-[18px]" >
        <div className="flex flex-wrap items-end justify-between px-6 min-[418px]:flex-nowrap" >
          <div className="font-roboto text-sm font-medium leading-5 tracking-[0.16px] text-zinc-900" >
            9:30
          </div>
          <div className="flex items-center justify-end pl-4">
            <CameraCutout className="h-6 w-6 flex-shrink-0" />
          </div>
          <div className="flex items-center justify-center gap-x-[5px]">
            <div className="flex items-center justify-center">
              <Wifi className="h-4 w-4 flex-shrink-0" />
              <Signal className="h-4 w-4 flex-shrink-0" />
            </div>
            <Battery className="h-4 w-2 flex-shrink-0" />
          </div>
        </div>
        <div className="flex flex-grow flex-col items-center justify-center pt-2.5" >
          <img
            className="h-[839px] w-96 flex-shrink-0 object-cover object-center"
            src="/assets/cool-aesthetic-hd-wallpaper.jpeg"
            loading="lazy"
           />
        </div>
        <div className="flex items-center justify-center bg-purple-50 px-40 py-2.5" >
          <div className="h-1 w-28 flex-shrink-0 rounded-full bg-zinc-900" />
        </div>
      </div>
    </div>
  );
}

interface EntryPProps {
  className?: string;
}