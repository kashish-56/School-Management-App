import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, setEditingStudent } from './studentSlice';
import Students from '../components/Students';

export default function StudentList() {
  // useSelector ek hook hai jo Redux store
  // se data ko pull (extract) karta hai aur state change hone par UI ko 
  // re-render karta hai.

  const students = useSelector((state) => state.students.list);
  const editStudent = useSelector((state) => state.students.editingStudent);
  // useDispatch ek hook hai jo  UI component se Redux store tak message ya command bhejta hai, 
  // taaki Redux reducer challe aur state update ho sake lekin ye sirf state ko update krta h
  // value ko show nhi krta .

  const dispatch = useDispatch();

 return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <h3 className="text-xl font-semibold text-slate-800">📋 Registered Students</h3>
          <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-xs font-semibold text-indigo-600 border border-indigo-100">
            {students.length} Total
          </span>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-400">
            🎓
          </div>
          <p className="text-base font-medium text-slate-700">No students added yet</p>
          <p className="mt-1 text-sm text-slate-400">Use the form above to add your first student record.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200">
              <tr>
                <th scope="col" className="px-4 py-3.5 font-semibold">Roll No</th>
                <th scope="col" className="px-4 py-3.5 font-semibold">Student Name</th>
                <th scope="col" className="px-4 py-3.5 font-semibold">Course / Branch</th>
                <th scope="col" className="px-4 py-3.5 text-right font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {students.map((elem) => {
                const isEditing = editStudent?.id === elem.id;

                return (
                  <Students key={elem.id} student={elem} isEditing={isEditing} />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}