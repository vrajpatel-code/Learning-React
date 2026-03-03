import { useState } from "react"
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const [submitError, setSubmitError] = useState("")
  const [submitted, setSubmitted] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: "",
      gender: "",
      age: "",
    },
    mode: "onTouched",
  })

  const onSubmit = async (data) => {
    setSubmitError("")
    try {
      // in real apps you might call an API here
      console.log(data)
      setSubmitted(data)
    } catch {
      setSubmitError("Something went wrong while submitting. Please try again.")
    }
  }

  const onError = () => {
    setSubmitError("Please fix the errors below and try again.")
  }

  return (
    <>
      <div className="page">
        <div className="shell">
          <header className="header">
            <h1 className="title">React Hook Form</h1>
            <p className="subtitle">A small, clean form with validation.</p>
          </header>

          <form
            className="formCard"
            onSubmit={handleSubmit(onSubmit, onError)}
            noValidate
          >
            <fieldset className="fieldset" disabled={isSubmitting} aria-busy={isSubmitting}>
              {submitError && (
                <div className="alert alertError" role="alert">
                  {submitError}
                </div>
              )}

              <div className="grid">
                <div className="field">
                  <label className="label" htmlFor="firstName">Name</label>
                  <input
                    id="firstName"
                    className={`control ${errors.firstName ? "isInvalid" : ""}`}
                    placeholder="Enter your name"
                    autoComplete="name"
                    {...register("firstName", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" },
                      maxLength: { value: 32, message: "Name must be 32 characters or less" },
                    })}
                  />
                  {errors.firstName && (
                    <p className="errorText" role="alert">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="field">
                  <label className="label" htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    className={`control ${errors.gender ? "isInvalid" : ""}`}
                    {...register("gender", { required: "Please select a gender" })}
                  >
                    <option value="" disabled>Select…</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="errorText" role="alert">{errors.gender.message}</p>
                  )}
                </div>

                <div className="field">
                  <label className="label" htmlFor="age">Age</label>
                  <input
                    id="age"
                    className={`control ${errors.age ? "isInvalid" : ""}`}
                    type="number"
                    inputMode="numeric"
                    placeholder="16–100"
                    {...register("age", {
                      setValueAs: (v) => (v === "" || v === null ? undefined : Number(v)),
                      min: { value: 16, message: "Age must be at least 16" },
                      max: { value: 100, message: "Age must be 100 or less" },
                    })}
                  />
                  <p className="help">Optional. We only accept ages between 16 and 100.</p>
                  {errors.age && (
                    <p className="errorText" role="alert">{errors.age.message}</p>
                  )}
                </div>
              </div>

              <div className="actions">
                <button className="btn btnPrimary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting…" : "Submit"}
                </button>
                <button
                  className="btn btnGhost"
                  type="button"
                  onClick={() => reset()}
                  disabled={isSubmitting}
                >
                  Reset
                </button>
              </div>

              {isSubmitSuccessful && (
                <div className="alert alertSuccess" role="status">
                  Submitted successfully. Check the console output.
                </div>
              )}

              {submitted && (
                <div className="preview" aria-label="Submitted data preview">
                  <div className="previewTitle">Submitted data</div>
                  <pre className="previewCode">{JSON.stringify(submitted, null, 2)}</pre>
                </div>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
