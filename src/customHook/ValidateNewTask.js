const rules = {
  title: [
    { required: true, message: "Please enter a task." },
    { minLength: 3, message: "Task name looks a little bit shorter. 🤔" },
  ],
  category: [{ required: true, message: "Please select a category." }],
};

export default function validateForm(formData, setError) {
  const errorsData = {};

  Object.entries(formData).forEach(([key, value]) => {
    rules[key]?.some((rule) => {
      if (rule.required && !value) {
        errorsData[key] = rule.message;
        return true;
      }

      if (rule.minLength && value.length < rule.minLength) {
        errorsData[key] = rule.message;
        return true;
      }
    });
  });

  setError(errorsData);
  return errorsData;
}
