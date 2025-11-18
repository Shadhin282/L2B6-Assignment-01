*** What are some differences between interfaces and types in TypeScript?

- ভেরিয়েবলের ধরণ নির্ধারণের জন্য টাইপস্ক্রিপ্টে ইন্টারফেস এবং প্রকারগুলি সবচেয়ে বেশি ব্যবহৃত হয়। উভয়ই ডেটার ধরণ নির্ধারণ করতে ব্যবহৃত হয়। তবে পার্থক্য রয়েছে।

টাইপ: যেকোনো আদিম বা অ-আদিম ডেটা সংজ্ঞায়িত করতে টাইপ ব্যবহার করা হয়।

ইন্টারফেস: ডেটার বস্তু নির্ধারণের জন্য ইন্টারফেস ব্যবহার করা হয়।

টাইপ র উদাহরণ:

type User = {
    name : string;
    age : number;
    city : string;
 }

 const UserInfo = (person: User[]): User[]=>{
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`
 }

 উপরের কোডে আমি UserInfo ফাংশনের টাইপ উপরে সংজ্ঞায়িত করেছি তারপর আমরা ফাংশনে টাইপের নাম ব্যবহার করেছি যদি আমরা একই ডেটা টাইপ সহ আরও ফাংশন ব্যবহার করি তবে এই টাইপটিকে শর্টকাট হিসাবে ব্যবহার করতে পারি। তাই এটি টাইপস্ক্রিপ্টের জন্য কার্যকর।

ইন্টারফেসের জন্য আরেকটি উদাহরণ:

interface Book  {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? 'Yes': 'No'}`)
}

এখানে টাইপের মতোই আমরা আগে ফাংশন ডেটা টাইপের জন্য ডেটা টাইপ সংজ্ঞায়িত করেছি কিন্তু এখানে আমরা কেবল অবজেক্ট ডেটা টাইপের জন্য করি। কারণ ইন্টারফেসে আমরা অবজেক্ট ডিফাইন কার্লি ব্র্যাকেট {} ব্যবহার করি।

টাইপ এলিয়াসে আমরা উদাহরণ হিসেবে যেকোনো ডেটা টাইপ অ্যাসাইন করার জন্য একটি ডিফাইন নাম এবং সমান চিহ্ন ব্যবহার করি;

type TRoll = number;
 type TPerson = {
    name: string;
    age : number;
 }

 সুতরাং, উভয়ই কার্যকর এবং এর নির্দিষ্ট উদ্দেশ্যও রয়েছে। যেমন উপরে উভয়ের ব্যবহার বর্ণনা করা হয়েছে এবং উদাহরণ ভাগ করা হয়েছে। আমরা এখন যখন প্রয়োজন তখন ব্যবহার করতে পারি।

 *** What is the use of enums in TypeScript? Provide an example of a numeric and string enum.


- enums হল "enumerations" এর সংক্ষিপ্ত রূপ। আসলে আমরা স্থির বা স্থির ভূমিকা বা ধ্রুবক ডেটা টাইপের জন্য enums ব্যবহার করি যা স্থায়ীভাবে স্থির করা হবে।

enums ব্যবহারের অনেক সুযোগ রয়েছে এবং এটি খুবই গুরুত্বপূর্ণ বিষয়।

নীচের উদাহরণটি হল enums এর ব্যবহার ভাগ করে নেওয়া।

enum TrafficLight {
  Red,
  Green,
  Yellow
}

let signal : TrafficLight = TrafficLight.Red;

console.log(signal)

বাস্তব জীবনে যখন আমরা কিছু স্থির বা ধ্রুবক ভূমিকা বা অপরিবর্তনীয় ভূমিকা ঘোষণা করি তখন আমরা এনাম ব্যবহার করি।