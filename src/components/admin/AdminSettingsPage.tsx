import { motion } from "framer-motion";
import ResumeEditor from "../sections/ResumeEditor";

const AdminSettingsPage = () => (
  <div className="max-w-5xl">
    <motion.h1
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-white text-3xl font-bold mb-2"
    >
      Settings
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-secondary mb-10"
    >
      Manage your resume. Changes publish to the main portfolio when you click Publish.
    </motion.p>
    <section>
      <h2 className="text-white text-xl font-semibold mb-6 border-b border-white/10 pb-3">
        Resume
      </h2>
      <ResumeEditor showPublish />
    </section>
  </div>
);

export default AdminSettingsPage;
