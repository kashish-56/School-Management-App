import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent, clearEditingStudent } from './studentSlice';

export default function StudentForm() {
  const dispatch = useDispatch();
  const editingStudent = useSelector((state) => state.students.editingStudent);

  const [formData, setFormData] = useState({ name: '', rollNo: '', course: '' });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData({ name: '', rollNo: '', course: '' });
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.rollNo || !formData.course) return;

    if (editingStudent) {
      dispatch(updateStudent(formData));
    } else {
      dispatch(addStudent({ ...formData, id: Date.now().toString() }));
    }

    setFormData({ name: '', rollNo: '', course: '' });
  };

  return (
    <div className="mb-7 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-800">
          {editingStudent ? '✏️ Edit Student Details' : '➕ Add New Student'}
        </h3>
        {editingStudent && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
            Editing Roll #{editingStudent.rollNo}
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:items-end">
        {/* Student Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-600">Full Name</label>
          <input
            type="text"
            placeholder="e.g. Kashish Kumari"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-600">Roll Number</label>
          <input
            type="text"
            placeholder="e.g. 101"
            value={formData.rollNo}
            onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-600">Course / Branch</label>
          <input
            type="text"
            placeholder="e.g. Computer Science"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition active:scale-95 ${
              editingStudent
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {editingStudent ? 'Update' : 'Add'}
          </button>

          {editingStudent && (
            <button
              type="button"
              onClick={() => dispatch(clearEditingStudent())}
              className="rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition active:scale-95"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}