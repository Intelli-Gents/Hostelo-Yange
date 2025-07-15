import Nav from "./Nav";

const Explore = () => {

    const formData = new FormData();
    formData.append("name", "Amos");
    console.log(formData);

    return (
        <div>
            <Nav />
        </div>
    );
}

"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Search,
  Filter,
  MapPin,
  Star,
  Phone,
  Mail,
  Wifi,
  Car,
  Utensils,
  Shield,
  Building,
  X,
  SlidersHorizontal,
  Dumbbell,
  BookOpen,
  Home,
} from "lucide-react"
import Image from "../assets/images"
import Link from "next/link"

// Mock hostel data
const hostelsData = [
  {
    id: 1,
    name: "Olympia' Hostel",
    university: "makerere",
    location: "Wandegeya, Near Makerere University",
    price: 300000,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "security", "meals", "laundry"],
    gender: "female",
    roomType: ["single", "double"],
    custodian: {
      name: "Mrs. Sarah Nakato",
      phone: "+256 700 123 456",
      email: "sarah@garanga.com",
    },
    description: "A safe and comfortable hostel for female students near Makerere University.",
  },
  {
    id: 2,
    name: "Ideal Diamond Hostel",
    university: "mubs",
    location: "Nakawa, Near MUBS",
    price: 250000,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "security", "parking"],
    gender: "mixed",
    roomType: ["double", "shared"],
    custodian: {
      name: "Mr. John Ssemakula",
      phone: "+256 701 234 567",
      email: "john@bitu.com",
    },
    description: "Affordable accommodation with modern facilities near MUBS.",
  },
  {
    id: 3,
    name: "5A Hostel",
    university: "kyambogo",
    location: "Banda, Near Kyambogo University",
    price: 280000,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "security", "parking", "study", "laundry"],
    gender: "mixed",
    roomType: ["single", "double"],
    custodian: {
      name: "Ms. Grace Namuli",
      phone: "+256 702 345 678",
      email: "grace@myammy.com",
    },
    description: "Modern hostel with excellent facilities near Kyambogo University.",
  },
  {
    id: 4,
    name: "KIU Student Lodge",
    university: "kiu",
    location: "Kansanga, Near KIU",
    price: 320000,
    rating: 4.5,
    reviews: 67,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "security", "parking", "meals", "gym"],
    gender: "mixed",
    roomType: ["single"],
    custodian: {
      name: "Mr. David Mukasa",
      phone: "+256 703 456 789",
      email: "david@kiulodge.com",
    },
    description: "Premium student accommodation with gym facilities.",
  },
  {
    id: 5,
    name: "Mbarara Girls' Hostel",
    university: "mbarara",
    location: "Mbarara Town, Near Mbarara University",
    price: 200000,
    rating: 4.4,
    reviews: 43,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "security", "meals"],
    gender: "female",
    roomType: ["shared", "double"],
    custodian: {
      name: "Mrs. Betty Tumusiime",
      phone: "+256 704 567 890",
      email: "betty@mbararagirls.com",
    },
    description: "Comfortable and affordable hostel for female students in Mbarara.",
  },
  {
    id: 6,
    name: "IUEA Student Center",
    university: "iuea",
    location: "Kansanga, Near IUEA",
    price: 350000,
    rating: 4.9,
    reviews: 78,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "security", "parking", "meals", "gym", "laundry"],
    gender: "mixed",
    roomType: ["single"],
    custodian: {
      name: "Mr. Robert Kiggundu",
      phone: "+256 705 678 901",
      email: "robert@iueastudent.com",
    },
    description: "Luxury student accommodation with all modern amenities.",
  },
  {
    id: 7,
    name: "Nana Hostel",
    university: "makerere",
    location: "Wandegeya, Near Makerere University",
    price: 320000,
    rating: 4.4,
    reviews: 92,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "security", "study", "parking"],
    gender: "male",
    roomType: ["single", "double"],
    custodian: {
      name: "Mr. Peter Ssali",
      phone: "+256 706 789 012",
      email: "peter@makerereboysHostel.com",
    },
    description: "Dedicated accommodation for male students with study facilities.",
  },
  {
    id: 8,
    name: "Akamwesi Hostel",
    university: "mubs",
    location: "Nakawa, Near MUBS",
    price: 450000,
    rating: 4.8,
    reviews: 134,
    image: "/placeholder.svg?height=200&width=300",
    amenities: ["wifi", "gym", "meals", "laundry", "parking", "security"],
    gender: "mixed",
    roomType: ["single"],
    custodian: {
      name: "Ms. Alice Namukasa",
      phone: "+256 707 890 123",
      email: "alice@mubsexecutive.com",
    },
    description: "Premium accommodation with executive facilities and services.",
  },
]
export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    university: "",
    priceRange: [0, 500000],
    gender: [],
    amenities: [],
    roomType: [],
  })
  const [sortBy, setSortBy] = useState("relevance")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Check authentication status
  useEffect(() => {
    const authStatus = typeof window !== "undefined" && localStorage.getItem("isAuthenticated") === "true"
    setIsAuthenticated(authStatus)
  }, [])

  // Filter and sort hostels
  const filteredHostels = useMemo(() => {
    const filtered = hostelsData.filter((hostel) => {
      // Search term filter
      if (
        searchTerm &&
        !hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !hostel.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !hostel.university.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false
      }

      // University filter
      if (filters.university && hostel.university !== filters.university) {
        return false
      }

      // Price filter
      if (hostel.price < filters.priceRange[0] || hostel.price > filters.priceRange[1]) {
        return false
      }

      // Gender filter
      if (filters.gender.length > 0 && !filters.gender.includes(hostel.gender)) {
        return false
      }

      // Amenities filter
      if (filters.amenities.length > 0 && !filters.amenities.every((amenity) => hostel.amenities.includes(amenity))) {
        return false
      }

      // Room type filter
      if (filters.roomType.length > 0 && !filters.roomType.some((type) => hostel.roomType.includes(type))) {
        return false
      }

      return true
    })

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        // Keep original order for relevance
        break
    }

    return filtered
  }, [searchTerm, filters, sortBy])

  const paginatedHostels = filteredHostels.slice(0, currentPage * itemsPerPage)

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setCurrentPage(1)
  }

  const handleCheckboxChange = (key, value, checked) => {
    setFilters((prev) => ({
      ...prev,
      [key]: checked ? [...prev[key], value] : prev[key].filter((item) => item !== value),
    }))
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      university: "",
      priceRange: [0, 500000],
      gender: [],
      amenities: [],
      roomType: [],
    })
    setSearchTerm("")
    setSortBy("relevance")
    setCurrentPage(1)
  }

  const getAmenityIcon = (amenity) => {
    const icons = {
      wifi: <Wifi className="w-4 h-4" />,
      security: <Shield className="w-4 h-4" />,
      parking: <Car className="w-4 h-4" />,
      meals: <Utensils className="w-4 h-4" />,
      gym: <Dumbbell className="w-4 h-4" />,
      laundry: <Building className="w-4 h-4" />,
      study: <BookOpen className="w-4 h-4" />,
    }
    return icons[amenity] || <Home className="w-4 h-4" />
  }

  const getAmenityLabel = (amenity) => {
    const labels = {
      wifi: "WiFi",
      security: "24/7 Security",
      parking: "Parking",
      meals: "Meals Included",
      gym: "Gym",
      laundry: "Laundry Service",
      study: "Study Room",
    }
    return labels[amenity] || amenity
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold text-gray-900">University</Label>
        <Select value={filters.university} onValueChange={(value) => handleFilterChange("university", value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="All Universities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Universities</SelectItem>
            <SelectItem value="makerere">Makerere University</SelectItem>
            <SelectItem value="mubs">MUBS</SelectItem>
            <SelectItem value="kyambogo">Kyambogo University</SelectItem>
            <SelectItem value="kiu">KIU</SelectItem>
            <SelectItem value="mbarara">Mbarara University</SelectItem>
            <SelectItem value="iuea">IUEA</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-base font-semibold text-gray-900">Price Range (UGX per semester)</Label>
        <div className="mt-4 px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => handleFilterChange("priceRange", value)}
            max={500000}
            min={0}
            step={10000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{filters.priceRange[0].toLocaleString()}</span>
            <span>{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold text-gray-900 mb-3 block">Gender</Label>
        <div className="space-y-3">
          {["male", "female", "mixed"].map((gender) => (
            <div key={gender} className="flex items-center space-x-2">
              <Checkbox
                id={gender}
                checked={filters.gender.includes(gender)}
                onCheckedChange={(checked) => handleCheckboxChange("gender", gender, checked)}
              />
              <Label htmlFor={gender} className="capitalize cursor-pointer">
                {gender === "mixed" ? "Mixed" : gender === "male" ? "Male Only" : "Female Only"}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold text-gray-900 mb-3 block">Room Type</Label>
        <div className="space-y-3">
          {["single", "double", "shared"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={filters.roomType.includes(type)}
                onCheckedChange={(checked) => handleCheckboxChange("roomType", type, checked)}
              />
              <Label htmlFor={type} className="capitalize cursor-pointer">
                {type} Room
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold text-gray-900 mb-3 block">Amenities</Label>
        <div className="space-y-3">
          {["wifi", "security", "parking", "meals", "gym", "laundry", "study"].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={(checked) => handleCheckboxChange("amenities", amenity, checked)}
              />
              <Label htmlFor={amenity} className="cursor-pointer flex items-center gap-2">
                {getAmenityIcon(amenity)}
                {getAmenityLabel(amenity)}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
        <X className="w-4 h-4 mr-2" />
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Hostelo Yange</span>
            </Link>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    localStorage.removeItem("isAuthenticated")
                    setIsAuthenticated(false)
                  }}
                >
                  Sign Out
                </Button>
              ) : (
                <Link href="/auth">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search hostels by name, location, or university..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-xl"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Filters</h3>
                </div>
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters & Search
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your hostel search</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{filteredHostels.length} Hostels Found</h1>
                <p className="text-gray-600">
                  Showing {Math.min(paginatedHostels.length, filteredHostels.length)} of {filteredHostels.length}{" "}
                  results
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Label htmlFor="sort" className="text-sm font-medium">
                    Sort by:
                  </Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(filters.university ||
              filters.gender.length > 0 ||
              filters.amenities.length > 0 ||
              filters.roomType.length > 0 ||
              searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchTerm && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    Search: {searchTerm}
                  </Badge>
                )}
                {filters.university && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    {filters.university}
                  </Badge>
                )}
                {filters.gender.map((gender) => (
                  <Badge key={gender} variant="secondary" className="bg-orange-100 text-orange-700">
                    {gender === "mixed" ? "Mixed" : gender === "male" ? "Male Only" : "Female Only"}
                  </Badge>
                ))}
                {filters.amenities.map((amenity) => (
                  <Badge key={amenity} variant="secondary" className="bg-orange-100 text-orange-700">
                    {getAmenityLabel(amenity)}
                  </Badge>
                ))}
                {filters.roomType.map((type) => (
                  <Badge key={type} variant="secondary" className="bg-orange-100 text-orange-700">
                    {type} Room
                  </Badge>
                ))}
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-1" />
                  Clear All
                </Button>
              </div>
            )}

            {/* Hostels Grid */}
            <div className="grid gap-6">
              {paginatedHostels.map((hostel) => (
                <Card key={hostel.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-80 h-48 md:h-auto relative">
                      <Image
                        src={hostel.image || "/placeholder.svg"}
                        alt={hostel.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white text-orange-600">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          {hostel.rating}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{hostel.name}</h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{hostel.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-600">UGX {hostel.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">per semester</div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{hostel.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {hostel.amenities.map((amenity) => (
                          <Badge key={amenity} variant="outline" className="flex items-center gap-1">
                            {getAmenityIcon(amenity)}
                            <span>{getAmenityLabel(amenity)}</span>
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            {hostel.rating} ({hostel.reviews} reviews)
                          </span>
                          <Badge variant={hostel.gender === "mixed" ? "default" : "secondary"}>
                            {hostel.gender === "mixed"
                              ? "Mixed"
                              : hostel.gender === "male"
                                ? "Male Only"
                                : "Female Only"}
                          </Badge>
                          <Badge variant="outline">
                            {hostel.roomType.includes("single") ? "Single Room" : "Shared Room"}
                          </Badge>
                        </div>

                        {isAuthenticated ? (
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Phone className="w-4 h-4 mr-1" />
                              {hostel.custodian.phone}
                            </Button>
                            <Button variant="outline" size="sm">
                              <Mail className="w-4 h-4 mr-1" />
                              Contact
                            </Button>
                          </div>
                        ) : (
                          <Link href="/auth">
                            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                              Sign In to Contact
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {paginatedHostels.length < filteredHostels.length && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                >
                  Load More Results
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredHostels.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No hostels found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
