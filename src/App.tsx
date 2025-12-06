function App() {
  return (
    <div className="p-6">
      <div className="border border-slate-100 p-6 bg-white rounded-2xl shadow-sm">
        <header className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-amber-400 text-white text-lg">
            U
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">User</span>
              <span className="text-sm text-slate-400">@username</span>
            </div>
            <span className="text-xs text-slate-400">1 hour ago</span>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
