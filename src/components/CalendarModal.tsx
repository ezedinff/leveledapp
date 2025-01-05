import Cal from "@calcom/embed-react";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal = ({ isOpen, onClose }: CalendarModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative z-50 h-[70vh] w-[70%] max-w-6xl rounded-lg bg-white p-8 dark:bg-gray-dark">
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-lg hover:text-gray-700 dark:bg-gray-dark dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <Cal
          calLink={`${process.env.NEXT_PUBLIC_CAL_USERNAME}/consultation`}
          style={{ width: "100%", height: "100%", minHeight: "700px" }}
          config={{
            layout: "month_view",
            theme: "light",
          }}
        />
      </div>
    </div>
  );
};

export default CalendarModal; 