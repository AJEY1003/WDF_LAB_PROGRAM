import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegistrationForm from './register/UserRegistrationForm';
import Login from './register/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegistrationForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
