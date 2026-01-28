import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'
import { UserProvider } from './context/UserContext'
import AboutPage from './components/AboutPage'
import AcademicsPage from './components/AcademicsPage'
import AdmissionsPage from './components/AdmissionsPage'
import StudentLifePage from './components/StudentLifePage'
import SupportPage from './components/SupportPage'
import Login from './components/Login'
import WelcomeDashboard from './components/WelcomeDashboard'
import RegistrationDashboard from './components/RegistrationDashboard'
import CourseCatalogue from './components/CourseCatalogue'
import MySchedule from './components/MySchedule'
import Profile from './components/Profile'
import CompletedCoursesPage from './components/CompletedCoursesPage'
import RequiredCoursesPage from './components/RequiredCoursesPage'
import MyHoldsPage from './components/MyHoldsPage'
import BillingPage from './components/BillingPage'
import FinancialAidPage from './components/FinancialAidPage'
import MyHousingPage from './components/MyHousingPage'
import My1098TTaxFormsPage from './components/My1098TTaxFormsPage'
import { useUser } from './context/UserContext'

interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

function AppRoutes() {
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const { user } = useUser()

  return (
    <Routes>
      {/* Root redirects to login or dashboard */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? (
            <Navigate to="/welcome" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      
      {/* Public Pages - Kept for reference but not in main navigation */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/academics" element={<AcademicsPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/student-life" element={<StudentLifePage />} />
      <Route path="/support" element={<SupportPage />} />
      
      {/* Login Route */}
      <Route 
        path="/login" 
        element={
          isAuthenticated ? (
            <Navigate to="/welcome" replace />
          ) : (
            <Login onLogin={() => setIsAuthenticated(true)} />
          )
        } 
      />
      
      {/* Protected Routes - Require Authentication */}
      <Route 
        path="/welcome" 
        element={
          isAuthenticated ? (
            <WelcomeDashboard />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          isAuthenticated ? (
            <RegistrationDashboard />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/catalogue" 
        element={
          isAuthenticated ? (
            <CourseCatalogue />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/schedule" 
        element={
          isAuthenticated ? (
            <MySchedule />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/profile" 
        element={
          isAuthenticated ? (
            <Profile user={user} />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/completed-courses" 
        element={
          isAuthenticated ? (
            <CompletedCoursesPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/required-courses" 
        element={
          isAuthenticated ? (
            <RequiredCoursesPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/admin/holds" 
        element={
          isAuthenticated ? (
            <MyHoldsPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/admin/billing" 
        element={
          isAuthenticated ? (
            <BillingPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/admin/financial-aid" 
        element={
          isAuthenticated ? (
            <FinancialAidPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/admin/housing" 
        element={
          isAuthenticated ? (
            <MyHousingPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
      <Route 
        path="/admin/tax-forms" 
        element={
          isAuthenticated ? (
            <My1098TTaxFormsPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <AppRoutes />
        </Router>
      </UserProvider>
    </AuthProvider>
  )
}

export default App

