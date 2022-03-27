import React from 'react'

const App = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    birth: '',
    comment: '',
    interest: '',
    job: '',
    terms: '',
    skills: '',
  })

  const [dataForm, setDataForm] = React.useState(null)

  React.useEffect(() => {
    if (dataForm != null) {
      console.log(JSON.stringify(dataForm))
      console.log('requisitado')
    }
  }, [dataForm])

  function handleSubmit(event) {
    setDataForm(form)
    event.preventDefault()
    console.log('Executou a handleSumit')
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  function handleCheckboxChange({ target }) {
    let skillsCheked = form.skills
    if (target.checked) {
      skillsCheked = [...skillsCheked, target.value]
      setForm({ ...form, skills: skillsCheked })
    } else {
      skillsCheked = skillsCheked.filter((skill) => skill !== target.value)
      setForm({ ...form, skills: skillsCheked })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={form.name} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={form.password}
        onChange={handleChange}
      />

      <label htmlFor="birth">Birth</label>
      <input
        type="date"
        id="birth"
        value={form.birth}
        onChange={handleChange}
      />
      <label htmlFor="comment">Comment</label>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        value={form.comment}
        onChange={handleChange}
      />

      <label htmlFor="interest">Interest</label>
      <select
        name="interest"
        id="interest"
        value={form.interest}
        onChange={handleChange}
      >
        <option disabled value="">
          Choose
        </option>
        <option value="study">Study</option>
        <option value="professional">Professional</option>
        <option value="personal">Personal</option>
      </select>
      <p>Job</p>
      <label key="job-searching">
        <input
          id="job"
          type="radio"
          checked={form.job === 'searching'}
          value="searching"
          onChange={handleChange}
        />
        Searching
      </label>
      <label key="job-working">
        <input
          id="job"
          type="radio"
          checked={form.job === 'working'}
          value="working"
          onChange={handleChange}
        />
        Working
      </label>

      <p>Select ypour Skills</p>
      <label>
        <input
          type="checkbox"
          value="HTML"
          checked={form.skills.includes('HTML')}
          onChange={handleCheckboxChange}
        />
        HTML
      </label>
      <label>
        <input
          type="checkbox"
          value="CSS"
          checked={form.skills.includes('CSS')}
          onChange={handleCheckboxChange}
        />
        CSS
      </label>
      {form.skills}

      <label>
        <input
          type="checkbox"
          id="terms"
          onChange={({ target }) => setForm({ ...form, terms: target.checked })}
        />
        Accept the terms
      </label>
      {form.terms && <p>Accepted</p>}

      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

export default App
