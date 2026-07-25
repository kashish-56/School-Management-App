import { createSlice } from '@reduxjs/toolkit';
// Slice Redux state ka ek chhota part hai, jo ek sirf single feature ke state, reducers, 
// aur actions ko ek hi jagah combine karke manage karta hai. Jaisai Student management system me 
// student ko add aur update form handle kr rha h aur edit and delete studentList kr rha h 
// aur wo saare updation is studentSlice me reducers ki madat se state update ho rha h 

// createSlice ek API function hai jo Redux Toolkit (@reduxjs/toolkit) humein deta hai.


const studentSlice = createSlice({
    // name ye btata h ki ye kon si feature hai kyuki major project me bohot saare features hote h
  name: 'students',
  initialState :{
    // initial state me hum wo rkhte h jo hme initially dikhana hota h 
    
  list: [
    { id: '1', name: 'Kashish Kumari', rollNo: '101', course: 'Computer Science' },
    { id: '2', name: 'Radhika Rani', rollNo: '102', course: 'Information Technology' }
  ],

//   editingStudent ek key hai jiska main kaam yehi hai ki jab hum "Edit"
//  button par click karein, 
// toh wo selected student ka data save karke form ko pre-fill kar sake
  editingStudent: null, 
},

// reducers multiple function ko handle krta h 
  reducers: {
    // ye add student function hai
    addStudent: (state, action) => {
      state.list.push(action.payload); 
    },
    // ye add student function hai
    deleteStudent: (state, action) => {
      state.list = state.list.filter(student => student.id !== action.payload);
    },
    // ye delete student function hai
    setEditingStudent: (state, action) => {
      state.editingStudent = action.payload;
    },
    // ye update student function hai
    updateStudent: (state, action) => {
      const index = state.list.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      state.editingStudent = null; // Reset edit state after update
    },
    // ye clear button ke click pe editingStudent ko null kr dega
    clearEditingStudent: (state) => {
      state.editingStudent = null;
    }
  },
});


//  saare function ko export kr rhe h taki hum usko dusre jagah use kr ske
export const { 
  addStudent, 
  deleteStudent, 
  setEditingStudent, 
  updateStudent, 
  clearEditingStudent 
} = studentSlice.actions;

// ye pura reducer ko export kr rha h is file se
export default studentSlice.reducer;