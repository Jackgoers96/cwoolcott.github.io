// TODO: Import useReducer so that we can use it in this component
import React, { useState, useReducer } from 'react';

// TODO: Import our type variables
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
  SET_STUDENT_NAME,
  SET_STUDENT_MAJOR
} from '../utils/actions'

// TODO: Import our reducer
import reducer from '../utils/reducers';

// Import our custom useStudentContext hook to have access to the initial state
import { useStudentContext } from '../utils/StudentContext';

export default function StudentList() {
  // The value property from our Student provider is made available from our custom hook. Here we pluck off the student array from our initial state.
  const initialState = useStudentContext();

  // TODO: Initialize `useReducer` hook.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Initialize state for new students and new student majors
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentMajor, setNewStudentMajor] = useState('');

  return (
    <div>
      {/* // TODO: Refactor to access `students` from our state object */}
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {/* // TODO: Refactor to access `students` from our state object */}
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          // TODO: Call dispatch method with an object containing type and payload
                          // Your code here
                          return dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id
                          })
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                value={state.studentName}
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_NAME, payload: e.target.value })
                }
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_MAJOR, payload: e.target.value })
                }
                value={state.studentMajor}
              >
                <option>Choose major...</option>
                {/* // TODO: Refactor to access `students` from our state object */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  return dispatch({
                    type: ADD_STUDENT,
                    payload: {
                      name: state.studentName,
                      major: state.studentMajor
                    }
                  })
                  // TODO: Call dispatch method with an object containing type and payload for adding a new student
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
