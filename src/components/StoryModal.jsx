import React, { useState } from "react";

const StoryModal = ({ setShowModal, showModal, imgUrl }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="flex bg-zinc-900 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setShowModal(false)}>
              <span className="text-white fixed lg:top-10 lg:right-20 top-5 right-24 opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                X
              </span>
            </button>
            <img src={imgUrl} alt="" />
          </div>
        </>
      ) : null}
    </>
  );
};

export default StoryModal;
