const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

const getLength = (value: unknown): number | undefined => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}' `;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (Value: Item[]): Item[] => {
  const filterRating = Value.filter(
    (item) => item.rating >= 4 && item.rating <= 5
  );
  return filterRating;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: User[]): User[] => {
  return value.filter((item) => item.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = (
  value1: (string | number)[],
  value2: (string | number)[]
): (string | number)[] => {
  const uniqueValue: (string | number)[] = [];

  const checkUniqueValue = (
    array: (string | number)[],
    value: string | number
  ): boolean => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < value1.length; i++) {
    if (!checkUniqueValue(uniqueValue, value1[i])) {
      uniqueValue[uniqueValue.length] = value1[i];
    }
  }

  for (let i = 0; i < value2.length; i++) {
    if (!checkUniqueValue(uniqueValue, value2[i])) {
      uniqueValue[uniqueValue.length] = value2[i];
    }
  }

  return uniqueValue;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  const totalPrice = products.map((product) => {
    const priceofProduct = product.price * product.quantity;
     
    return product.discount
      ? priceofProduct * (1 - product.discount / 100)
      : priceofProduct;
  });

  return totalPrice.reduce((sum, value) => sum + value, 0);
};


