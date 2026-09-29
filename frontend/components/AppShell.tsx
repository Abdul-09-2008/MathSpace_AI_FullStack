import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
export default function AppShell({children}:{children:ReactNode}){return <div className="app-shell"><Sidebar/><section className="workspace"><Topbar/>{children}</section></div>}
