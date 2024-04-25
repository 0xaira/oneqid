export default function Green() {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="relative w-[300px] h-[150px] bg-green-500 rounded-lg shadow-lg shadow-green-400/50 hover:shadow-green-400/70 transition-shadow duration-300">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-green-600 opacity-50 blur-xl animate-glow" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-green-600 opacity-50 blur-md animate-glow-inner" />
            <div className="relative z-10 flex justify-center items-center h-full">
              <h2 className="text-white font-bold text-2xl">1</h2>
              <h2 className="text-white font-bold text-2xl">1</h2>
              <h2 className="text-white font-bold text-2xl">1</h2>
            </div>
          </div>
        </div>
      </>
    )
  }