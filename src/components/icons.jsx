import { Mail, MapPin, FileText, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export function LinkedInIcon({ size = 16, className = "" }) {
  return <FaLinkedin size={size} aria-hidden="true" className={className} />;
}

export function GithubIcon({ size = 16, className = "" }) {
  return <FaGithub size={size} aria-hidden="true" className={className} />;
}

export function MailIcon({ size = 16, className = "" }) {
  return <Mail size={size} strokeWidth={1.75} aria-hidden="true" className={className} />;
}

export function MapPinIcon({ size = 14, className = "" }) {
  return <MapPin size={size} strokeWidth={1.75} aria-hidden="true" className={className} />;
}

export function FileTextIcon({ size = 16, className = "" }) {
  return <FileText size={size} strokeWidth={1.75} aria-hidden="true" className={className} />;
}

export function DownloadIcon({ size = 16, className = "" }) {
  return <Download size={size} strokeWidth={1.75} aria-hidden="true" className={className} />;
}
