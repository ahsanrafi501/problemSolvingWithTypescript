Pick and Omit: How Utility Types Keep Your TypeScript Code DRY

Introduction : সফটওয়্যার ডেভেলপমেন্টে একটি জনপ্রিয় নীতি হলো DRY (Don't Repeat Yourself)। অর্থাৎ একই কোড বারবার না লেখা। TypeScript-এ ইন্টারফেস বা টাইপ নিয়ে কাজ করার সময় অনেক সময় আমাদের একই প্রপার্টি বারবার লিখতে হয়। Pick এবং Omit ইউটিলিটি টাইপগুলো আমাদের এই সমস্যা থেকে মুক্তি দেয়।

Master Interface: The Source of Truth - ধরা যাক আমাদের একটি মাস্টার ইন্টারফেস আছে:

Code Snipped :

interface User { id: number; name: string; email: string; age: number; isAdmin: boolean; }

Creating Slices with Pick : যদি আপনার এমন একটি ফাংশন থাকে যা শুধু ইউজারের নাম এবং ইমেইল দেখাবে, তবে নতুন করে টাইপ না লিখে Pick ব্যবহার করতে পারেন। এটি মাস্টার ইন্টারফেস থেকে নির্দিষ্ট কিছু প্রপার্টি টেনে নেয়।

Code Snipped :

type UserContactInfo = Pick<User, "name" | "email">;

const contact: UserContactInfo = { name: "Ahsan Habib", email: "navid@gamil.com" };

Creating Slices with Omit : আবার কখনও এমন হয় যে আপনার প্রায় সব প্রপার্টি লাগবে শুধু একটি বা দুটি বাদে। তখন Omit ব্যবহার করা সুবিধাজনক। এটি নির্দিষ্ট প্রপার্টি বাদ দিয়ে বাকি সব নিয়ে একটি নতুন টাইপ তৈরি করে।

Code Snipped :

type UserWithoutSensitiveData = Omit <User, "id" | "isAdmin">;

const publicProfile: UserWithoutSensitiveData = { name: "Rafi", email: "rafi@gamil.com", age: 25 };

How It Prevents Code Duplication : যদি আপনি Pick বা Omit ব্যবহার না করতেন, তবে আপনাকে প্রতিটি ছোট কাজের জন্য আলাদা আলাদা ইন্টারফেস লিখতে হতো। এতে মাস্টার ইন্টারফেসে কোনো পরিবর্তন করলে সব জায়গায় গিয়ে আপডেট করতে হতো। কিন্তু এই ইউটিলিটি টাইপগুলো ব্যবহার করায় শুধু User ইন্টারফেস আপডেট করলেই বাকি সব জায়গায় অটোমেটিক পরিবর্তন হয়ে যাবে।

Conclusion : Pick এবং Omit ব্যবহার করে আমরা কোড ডুপ্লিকেশন কমিয়ে একটি ক্লিন এবং মেইনটেইনেবল কোডবেস তৈরি করতে পারি। এটি আমাদের কোডকে আরও বেশি ডাইনামিক এবং টাইপ-সেফ রাখে।