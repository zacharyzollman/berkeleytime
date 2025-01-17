import React from 'react';
import { Modal } from 'react-bootstrap';
import ClassDescription from './ClassDescription';
import { Semester } from 'utils/playlists/semesters';
import { CourseReference } from 'utils/courses/course';

type ClassDescriptionModalProps = {
  show: boolean;
  course: CourseReference;
  semester: Semester;
  hideModal: () => void;
  modifyFilters: (add: Set<string>, remove: Set<string>) => void;
};

const ClassDescriptionModal = ({
  show,
  course,
  semester,
  hideModal,
  modifyFilters,
}: ClassDescriptionModalProps) => {
  return (
    <Modal show={show} className="modal mobile-modal">
      <div className="full">
        <button onClick={hideModal} className="link-btn">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#C4C4C4" />
            <path
              d="M24 15H11.83L17.42 9.41L16 8L8 16L16 24L17.41 22.59L11.83 17H24V15Z"
              fill="white"
            />
          </svg>
          Back to Courses{' '}
        </button>
        <ClassDescription
          course={course}
          semester={semester}
          modifyFilters={modifyFilters}
        />
      </div>
    </Modal>
  );
};

export default ClassDescriptionModal;
