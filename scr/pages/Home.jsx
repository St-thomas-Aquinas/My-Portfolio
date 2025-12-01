import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import VRScene from "../components/VRScene";

export default function Home() {
  return (
    <div className="flex">
      <SidebarMenu />
      <div className="ml-64 w-full h-screen">
        <VRScene />
      </div>
    </div>
  );
}
