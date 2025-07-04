export default function Layout({ children }) { // Accept children as a prop
  return (
    <>
      {/* ---dashboard-navbar--- */}
      <div className="fixed top-0 left-0 w-full h-16 bg-neutral-900/90 backdrop-blur-lg border-b border-white/20 z-50 shadow-md flex items-center px-6">
        <span className="py-2 ml-8 text-white cursor-pointer mr-14" style={{ fontFamily: '"Jersey 15", cursive', fontSize: "35px" }}>AlTogether</span>
        <span className="w-[800px]" >
          <input
            type="text"
            placeholder="Search tasks, users, anything..."
            style={{ outline: "none", WebkitTapHighlightColor: "transparent" }}
            className="w-full ml-14 px-5 py-2 rounded-lg bg-neutral-900 text-white placeholder:text-neutral-400 transition-all
            focus:outline-none focus:ring-2 focus:ring-rose-950
            focus:shadow-[0_0_13px_2.5px_rgba(136,19,55,0.25)]"
          />
        </span>
      </div>
      {/* ---Main Content Area--- */}
      <div className="flex" >
        {/* ---Sidebar--- */}
        <div className="h-screen w-280px flex shrink-0" >
          <div className="w-[280px] h-screen bg-neutral-800 text-white flex flex-col justify-between p-4 ">
            <ul className="mt-16 pl-2 space-y-2">
              <li className="list-none text-base font-regular py-2 px-5 cursor-pointer hover:bg-neutral-900 hover:rounded-md  flex items-center gap-3">
                <img src="/icons/dashboard.svg" alt="Dashboard" className="w-5 invert h-5" />
                Dashboard
              </li>
              <li className="list-none text-lg py-2 px-5 font-regular cursor-pointer hover:bg-neutral-900 hover:rounded-md flex items-center gap-3">
                <img src="/icons/tasks.svg" alt="Tasks" className="w-5 invert  h-5" />
                Tasks
              </li>
              <li className="list-none text-lg py-2 px-5 font-regular cursor-pointer hover:bg-neutral-900 hover:rounded-md flex items-center gap-3">
                <img src="/icons/profile.svg" alt="Profile" className="w-5 invert  h-5" />
                Profile
              </li>
              <li className="list-none text-lg py-2 px-5 font-regular cursor-pointer hover:bg-neutral-900 hover:rounded-md flex items-center gap-3">
                <img src="/icons/logout.svg" alt="Logout" className="w-5 invert  h-5" />
                Logout
              </li>
            </ul>
          </div>
        </div>
        {/* Render children here, alongside the sidebar content */}
        <div className="flex-1 mt-16"> {/* Add mt-16 to push content below navbar */}
          {children}
        </div>
      </div>
    </>
  );
}