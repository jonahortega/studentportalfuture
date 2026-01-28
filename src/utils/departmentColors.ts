// Department color mapping for consistent color coding with vibrant gradients
export const getDepartmentColor = (department: string): string => {
  const colorMap: { [key: string]: string } = {
    'Computer Science': 'bg-gradient-to-br from-blue-500 to-blue-600',
    'Mathematics': 'bg-gradient-to-br from-purple-500 to-purple-600',
    'History': 'bg-gradient-to-br from-amber-500 to-amber-600',
    'French Studies': 'bg-gradient-to-br from-red-500 to-red-600',
    'Art History': 'bg-gradient-to-br from-pink-500 to-pink-600',
    'Philosophy': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    'Economics': 'bg-gradient-to-br from-green-500 to-green-600',
    'Literature': 'bg-gradient-to-br from-teal-500 to-teal-600',
    'Political Science': 'bg-gradient-to-br from-orange-500 to-orange-600',
    'English': 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    'Arabic': 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    'General': 'bg-gradient-to-br from-slate-500 to-slate-600',
    'Anthropology': 'bg-gradient-to-br from-rose-500 to-rose-600',
    'Biology': 'bg-gradient-to-br from-lime-500 to-lime-600',
    'Business': 'bg-gradient-to-br from-violet-500 to-violet-600',
    'Chemistry': 'bg-gradient-to-br from-sky-500 to-sky-600',
    'Communication': 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-600',
    'Geography': 'bg-gradient-to-br from-amber-500 to-yellow-600',
    'International Studies': 'bg-gradient-to-br from-blue-600 to-indigo-600',
    'Music': 'bg-gradient-to-br from-purple-600 to-pink-600',
    'Psychology': 'bg-gradient-to-br from-pink-500 to-rose-600',
    'Sociology': 'bg-gradient-to-br from-orange-500 to-red-600',
    'Spanish': 'bg-gradient-to-br from-red-600 to-orange-600',
    'Theater': 'bg-gradient-to-br from-purple-500 to-indigo-600',
    'Visual Culture': 'bg-gradient-to-br from-pink-500 to-purple-600',
  }
  
  return colorMap[department] || 'bg-gradient-to-br from-gray-500 to-gray-600'
}

export const getDepartmentColorLight = (department: string): string => {
  const colorMap: { [key: string]: string } = {
    'Computer Science': 'bg-blue-50 border-blue-200 text-blue-800',
    'Mathematics': 'bg-purple-50 border-purple-200 text-purple-800',
    'History': 'bg-amber-50 border-amber-200 text-amber-800',
    'French Studies': 'bg-red-50 border-red-200 text-red-800',
    'Art History': 'bg-pink-50 border-pink-200 text-pink-800',
    'Philosophy': 'bg-indigo-50 border-indigo-200 text-indigo-800',
    'Economics': 'bg-green-50 border-green-200 text-green-800',
    'Literature': 'bg-teal-50 border-teal-200 text-teal-800',
    'Political Science': 'bg-orange-50 border-orange-200 text-orange-800',
  }
  
  return colorMap[department] || 'bg-gray-50 border-gray-200 text-gray-800'
}

export const getDepartmentColorText = (department: string): string => {
  const colorMap: { [key: string]: string } = {
    'Computer Science': 'text-blue-600',
    'Mathematics': 'text-purple-600',
    'History': 'text-amber-600',
    'French Studies': 'text-red-600',
    'Art History': 'text-pink-600',
    'Philosophy': 'text-indigo-600',
    'Economics': 'text-green-600',
    'Literature': 'text-teal-600',
    'Political Science': 'text-orange-600',
  }
  
  return colorMap[department] || 'text-gray-600'
}

