export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-20 h-20 border-8 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-10 h-10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 15L65 40L90 45L70 65L75 90L50 80L25 90L30 65L10 45L35 40L50 15Z"
              fill="#FFE81F"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
