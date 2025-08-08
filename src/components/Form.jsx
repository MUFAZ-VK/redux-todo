// import React, { useState } from 'react';

// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const handleFormData = (ev) => {
//     ev.preventDefault();

//     if (name.trim() === '' || email.trim() === '') {
//       setError("All fields are required 😤");
//       return;
//     }

//     setError('');
//     console.log("Form submission working ✅");
//     console.log("Name:", name);
//     console.log("Email:", email);

//     // Optional: Clear fields
//     setName('');
//     setEmail('');
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">📝 Simple Form</h1>
//       <form onSubmit={handleFormData} className="space-y-4">

//         <div>
//           <label className="block font-semibold">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//             placeholder="Enter your name"
//           />
//         </div>

//         <div>
//           <label className="block font-semibold">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//             placeholder="Enter your email"
//           />
//         </div>

//         {error && (
//           <p className="text-red-600 font-medium">{error}</p>
//         )}

//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;
