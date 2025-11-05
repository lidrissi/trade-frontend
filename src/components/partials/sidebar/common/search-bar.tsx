"use client";
import { Input } from "@/components/ui/input";
import { useConfig } from "@/hooks/use-config";
import React from "react";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useMenuHoverConfig } from "@/hooks/use-menu-hover";
const SearchBar = () => {
  const [config] = useConfig();
  const [hoverConfig] = useMenuHoverConfig();
  const { hovered } = hoverConfig;

  if (config.showSearchBar === false || config.sidebar === "compact")
    return null;

  return (
    <AnimatePresence>
      <motion.div
        key={config.collapsed && !hovered ? "collapsed" : "expanded"}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {config.collapsed && !hovered ? (
          <CollapsedSearchBar />
        ) : (
          <InputGroup merged>
            <InputGroupText className="dark:border-secondary dark:group-focus-within:border-secondary bg-transparent">
              <Search className="h-4 w-4 dark:text-white" />
            </InputGroupText>
            <Input
              type="text"
              placeholder="Search Menu..."
              className="dark:border-secondary dark:focus:border-secondary bg-transparent dark:text-white dark:placeholder-white/80"
            />
          </InputGroup>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchBar;

const CollapsedSearchBar = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="outline"
          color="secondary"
          fullWidth
          className="dark:border-secondary ring-offset-sidebar mx-auto h-10 w-14 p-0 md:p-0"
        >
          <Search className="h-4 w-4 dark:text-white" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="dark:bg-sidebar border-sidebar">
        <InputGroup merged>
          <InputGroupText className="dark:border-secondary dark:group-focus-within:border-secondary bg-transparent">
            <Search className="h-4 w-4 dark:text-white" />
          </InputGroupText>
          <Input
            type="text"
            placeholder="Search Menu..."
            className="dark:border-secondary dark:focus:border-secondary bg-transparent dark:text-white dark:placeholder-white/80"
          />
        </InputGroup>
      </HoverCardContent>
    </HoverCard>
  );
};
