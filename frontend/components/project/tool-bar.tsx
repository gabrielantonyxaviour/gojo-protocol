import React from "react";
import {
  IconBusinessplan,
  IconChartHistogram,
  IconDownload,
  IconHammer,
  IconHome,
  IconPlus,
  IconRobot,
  IconTestPipe,
  IconWand,
} from "@tabler/icons-react";
import { FloatingVerticalDock } from "../ui/acternity/floating-vertical-dock";

export function ToolBar() {
  const links = [
    {
      title: "Add Node",
      icon: (
        <IconPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => console.log("Add Node"),
    },

    {
      title: "AI Agents",
      icon: (
        <IconRobot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => console.log("Add Node"),
    },
    {
      title: "App Testing",
      icon: (
        <IconTestPipe className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => console.log("Add Node"),
    },
    {
      title: "Ask Gojo",
      icon: (
        <IconWand className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => console.log("Add Node"),
    },
    {
      title: "App Export",
      icon: (
        <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      onClick: () => console.log("Add Node"),
    },
  ];
  return (
    <FloatingVerticalDock mobileClassName="translate-y-20" items={links} />
  );
}