import React from "react";
import { useDispatch } from 'react-redux';
import { deleteStudent, setEditingStudent } from '../features/studentSlice';

const Students = ({ student, isEditing }) => {
  const dispatch = useDispatch();

  return (
    <tr
      className={`transition-colors hover:bg-slate-50/80 ${
        isEditing ? "bg-amber-50/60" : ""
      }`}
    >
      <td className="whitespace-nowrap px-4 py-3.5 font-mono text-xs font-medium text-slate-500">
        #{student.rollNo}
      </td>

      <td className="whitespace-nowrap px-4 py-3.5 font-medium text-slate-900">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700 text-xs">
            {student.name ? student.name.charAt(0).toUpperCase() : "?"}
          </div>
          <span>{student.name}</span>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3.5 text-slate-600">
        <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
          {student.course}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-4 py-3.5 text-right">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => dispatch(setEditingStudent(student))}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition active:scale-95 ${
              isEditing
                ? "bg-amber-500 text-white shadow-sm hover:bg-amber-600"
                : "bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            {isEditing ? "Editing..." : "Edit"}
          </button>

          <button
            onClick={() => dispatch(deleteStudent(student.id))}
            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition active:scale-95"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Students;