/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

export default function App() {
  return (
    <div className="bg-brand-bg text-primary-black selection:bg-brand-blue/10 overflow-x-hidden min-h-screen font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
