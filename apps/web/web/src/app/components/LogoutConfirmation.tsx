"use client";

interface LogOutConfirmationProps {
  onCancel: () => void;
  onLogOut: () => void;
}

export default function LogOutConfirmation({ onCancel, onLogOut }: LogOutConfirmationProps) {
  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col gap-2">
        <p className="text-gray-400 text-lg self-start">Log Out Confirmation</p>
        <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-6 shadow-sm w-96 text-black">
            <p className="text-2xl font-bold text-center">Are you sure you want to log out?</p>
            <div className="flex gap-4 w-full">
            <button
                onClick={onCancel}
                className="flex-1 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
                Cancel
            </button>
            <button
                onClick={onLogOut}
                className="flex-1 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-800"
            >
                Log out
            </button>
        </div>
        </div>
        </div>
    </div>
  );
}