"use client";

import React, { useId } from "react";
import { DrawerTrigger as RadixDrawerTrigger } from "../ui/drawer";

type Props = React.ComponentPropsWithoutRef<typeof RadixDrawerTrigger> & {
  drawerId?: string;
};

const CustomDrawerTrigger = ({ drawerId, ...props }: Props) => {
  const autoId = useId();
  const id = drawerId ?? autoId;

  return (
    <RadixDrawerTrigger
      aria-controls={id}
      aria-haspopup="dialog"
      aria-expanded="false"
      data-slot="drawer-trigger"
      {...props}
    />
  );
};

export { CustomDrawerTrigger };
