import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const Modal = (props) => {
  const { editNote, updateThisNote, setUpdateThisNote } = useContext(NoteContext);

  const onChange = (e) => {
    setUpdateThisNote({ ...updateThisNote, [e.target.name]: e.target.value });
    //above syntax show that first distribute all the
    //values in newNote then if any change happen
    //then if it has same value of name then rewrite it
    //else add the new value
  };

  const handleEditNote = async (e) => {
    e.preventDefault();
    editNote();
  };


  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-body">
                <div className="container d-flex mb-4">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit Note
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="container">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control js-modal-title"
                      id="title"
                      placeholder="Title"
                      name="title"
                      onChange={onChange}
                      value={updateThisNote.title}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Note
                    </label>
                    <textarea
                      className="form-control js-modal-note"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="description"
                      onChange={onChange}
                      value={updateThisNote.description}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control js-modal-tag"
                      id="title"
                      placeholder="Tag"
                      name="tag"
                      onChange={onChange}
                      value={updateThisNote.tag}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleEditNote}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Modal;
