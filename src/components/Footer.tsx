
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto py-16 px-4 md:px-16 bg-netflix-black text-netflix-gray">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <ExternalLink size={20} />
          <span>Follow us on social media</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Audio Description</a>
            <a href="#" className="block hover:underline">Investor Relations</a>
            <a href="#" className="block hover:underline">Legal Notices</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Jobs</a>
            <a href="#" className="block hover:underline">Cookie Preferences</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Gift Cards</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
            <a href="#" className="block hover:underline">Corporate Information</a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Media Center</a>
            <a href="#" className="block hover:underline">Privacy</a>
            <a href="#" className="block hover:underline">Contact Us</a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-10">
          <button className="border border-netflix-gray py-2 px-4 text-sm mb-6">
            Service Code
          </button>
          <p className="text-xs">
            &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
