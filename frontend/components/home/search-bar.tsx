"use client";

import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { IconArrowUp, IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";

export function SearchBar() {
  const suggestedPrompts = [
    "Build a cross chain NFT using LayerZero",
    "Build a ETHSign Whitelist Hook Smart contract",
    "Build an enrypted IP solution for Story using Lit Protocol",
  ];
  const [prompt, setPrompt] = useState("");
  return (
    <div className="xl:w-[1000px] lg:w-[800px] w-[600px]">
      <Card>
        <CardContent className="p-0">
          <Input
            value={prompt}
            onChange={(e) => [setPrompt(e.target.value)]}
            placeholder="Ask a question or search for answers..."
            className="text-lg font-medium p-4 bg-transparent border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
          <div className="flex justify-end">
            <Button variant={"secondary"} className="px-3 py-4 m-2">
              <IconArrowUp></IconArrowUp>
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-wrap justify-center space-x-4 gap-y-2 py-4">
        {suggestedPrompts.map((p, id) => (
          <Badge
            key={id}
            className="xl:text-sm text-xs cursor-pointer hover:scale-105 transition  ease-out duration-150"
            onClick={() => {
              setPrompt(p);
            }}
          >
            {p} <IconArrowUpRight></IconArrowUpRight>{" "}
          </Badge>
        ))}
      </div>
    </div>
  );
}