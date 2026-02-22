import React from "react";
import { User, Info, Eye } from "lucide-react";
import { IoShieldCheckmark } from "react-icons/io5";
import { InfinitySpin } from "react-loader-spinner";
import { useState, useEffect } from "react";

const StandardAdminRegister = () => {
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [division, setDivision] = useState("");
  useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timmer);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7F6]">
        <InfinitySpin width="200" color="#0b602a" />
      </div>
    );
  }
  return (
    <div>
      <main className="flex-1 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-24 h-24  rounded-sm flex items-center justify-center">
                <img
                  className="w-16 h-16 object-cover mx-auto "
                  src="/src/assets/download.jpeg"
                  alt=""
                />
              </div>
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              FCT CUSTOMARY COURT OF NIGERIA
            </h1>
            <p className="text-gray-600 text-sm font-medium">
              Official Probate Application Portal • Abuja
            </p>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              Admin Internal Registration
            </h1>
            <p className="text-[#1a5c3a] text-base">
              Secure registration for authorized court officials of the FCT
              Customary Court.
            </p>
          </div>
          <div className="border-t-8 border-[#1a5c3a] bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#1a5C3a] px-8 py-5 items-center gap-3 p-10 m-5">
              <div className="flex gap-2 pt-10">
                <IoShieldCheckmark className="w-8 h-8 text-white" />
                <h2 className="text-white font-bold text-lg">
                  Internal Personnel Access
                </h2>
              </div>
              <p className="text-green-100 text-sm">
                Please fill the form below using your official credentials.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <form className="space-y-4" action="">
                {" "}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full legal name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Staff ID Number
                    </label>
                    <input
                      type="text"
                      placeholder="FCT/CRT/XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Offical Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="official@fctcourt.gov.ng"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Department/Division
                    </label>
                    <select
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700 appearance-none"
                    >
                      <option value="">Select Department/Division</option>
                      <option value="judicial">Judicial Division</option>
                      <option value="administrative">
                        Administrative Division
                      </option>
                      <option value="legal">Legal Division</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Account Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1a5c3a] focus:border-transparent text-sm text-gray-700"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-[#1a5c3a] hover:text-[#154d2f]"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 border-l-4 border-[#1a5c3a] p-4 rounded">
                  <div className="flex gap-3">
                    <Info className="w-5 h-5 text-[#1a5c3a] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1">
                        SECURITY POLICY
                      </p>
                      <p className="text-gray-700 text-sm">
                        All administrative accounts must be verified by the Head
                        of Probate before activation. Unauthorized access is
                        strictly prohibited under the Cybercrimes Act.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a5c3a] hover:bg-[#154d2f] text-white font-bold py-4 rounded-lg transition-colors text-base flex items-center justify-center gap-2 mt-8"
                >
                  <User className="w-5 h-5" />
                  Request Admin Access
                </button>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-700">
                    Have an account?{" "}
                    <a
                      href="/adminlogin"
                      className="text-[#1a5c3a] font-semibold hover:underline"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StandardAdminRegister;
