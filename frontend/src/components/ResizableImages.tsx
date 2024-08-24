import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import lifestyle from "@/assets/lifestyle.jpg";
import personal from "@/assets/personal.jpg";
import tech from "@/assets/tech.jpg";

export const ResizableImages = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center">
          <img src={lifestyle} alt="lifestyle" className="object-cover" />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center">
              <img src={personal} alt="personal" className="object-cover" />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center">
              <img src={tech} alt="tech" className="object-cover" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
