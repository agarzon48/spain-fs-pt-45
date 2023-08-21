import { useState } from "react";

const useUserInput = (initialState = {}) => {
  const [userInput, setUserInput] = useState(initialState);

  const handleUserInput = (e) =>
    setUserInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    const resetFields = () => setUserInput(initialState);

  return [
    userInput,
    handleUserInput,
    resetFields,
  ];
};

export default useUserInput;
