import React from "react";

export default function Modal({ title, children, onClose, width }) {
    return (
      <>
        <div className="fixed bg-white inset-0 top-0 left-0 right-0 buttom-0 opacity-70"></div>
        <div className="fixed inset-0">
          <div className="flex items-center justify-center min-h-full">
            <div
              className="bg-white shadow-[0_0_15px_rgb(0,0,0,0.6)]"
              style={{ width: `${width}rem` }}
            >
              <div className="border-b flex justify-between items-center p-4">
                <div className="text-2xl invisible">x</div>
                <div className="text-3xl font-semibold">{title}</div>
                <button onClick={onClose}>&#10005;</button>
              </div>
              <div className="max-h-[calc(100vh-5rem)] overflow-auto">
                {children}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }