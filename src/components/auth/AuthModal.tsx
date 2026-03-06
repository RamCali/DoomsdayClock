import { useState } from "react";
import { X, Mail, Lock, User, Loader2, AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { cn } from "../../lib/utils";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "login" | "register";
}

export function AuthModal({ isOpen, onClose, initialTab = "login" }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "register" | "forgot">(initialTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const { login, register } = useAuth();

  if (!isOpen) return null;

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setDisplayName("");
    setError("");
    setShowPassword(false);
    setForgotSuccess(false);
    setRegisterSuccess(false);
  };

  const switchTab = (newTab: "login" | "register" | "forgot") => {
    resetForm();
    setTab(newTab);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(email, displayName, password);
      setRegisterSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }
      setForgotSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-slide-up">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-doom/20 via-zinc-900 to-zinc-900 border border-doom/20 p-6 sm:p-8 shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-doom/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-atomic/5 rounded-full blur-2xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10">
            {/* Register success state */}
            {registerSuccess ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Account Created!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check your email for a verification link to unlock posting and commenting.
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-doom hover:bg-doom/90 text-white font-semibold rounded-xl transition-colors"
                >
                  Got it
                </button>
              </div>
            ) : (
              <>
                {/* Tab switcher */}
                {tab !== "forgot" && (
                  <div className="flex mb-6 bg-white/5 rounded-xl p-1">
                    <button
                      onClick={() => switchTab("login")}
                      className={cn(
                        "flex-1 py-2.5 text-sm font-medium rounded-lg transition-all",
                        tab === "login"
                          ? "bg-doom/20 text-doom border border-doom/30"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => switchTab("register")}
                      className={cn(
                        "flex-1 py-2.5 text-sm font-medium rounded-lg transition-all",
                        tab === "register"
                          ? "bg-atomic/20 text-atomic border border-atomic/30"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Create Account
                    </button>
                  </div>
                )}

                {/* Forgot password header */}
                {tab === "forgot" && (
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">Reset Password</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter your email and we'll send a reset link.
                    </p>
                  </div>
                )}

                {/* Forgot password success */}
                {forgotSuccess ? (
                  <div className="text-center py-4">
                    <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-4">
                      If that email exists in our system, you'll receive a reset link shortly.
                    </p>
                    <button
                      onClick={() => switchTab("login")}
                      className="text-sm text-doom hover:underline"
                    >
                      Back to Sign In
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Login Form */}
                    {tab === "login" && (
                      <form onSubmit={handleLogin} noValidate className="space-y-4">
                        <InputField
                          icon={<Mail className="w-4 h-4" />}
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={setEmail}
                          disabled={loading}
                        />
                        <PasswordField
                          value={password}
                          onChange={setPassword}
                          show={showPassword}
                          onToggle={() => setShowPassword(!showPassword)}
                          disabled={loading}
                        />

                        {error && <ErrorMessage message={error} />}

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 py-3 bg-doom hover:bg-doom/90 disabled:bg-doom/50 text-white font-semibold rounded-xl transition-colors"
                        >
                          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In"}
                        </button>

                        <button
                          type="button"
                          onClick={() => switchTab("forgot")}
                          className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Forgot password?
                        </button>
                      </form>
                    )}

                    {/* Register Form */}
                    {tab === "register" && (
                      <form onSubmit={handleRegister} noValidate className="space-y-4">
                        <InputField
                          icon={<User className="w-4 h-4" />}
                          type="text"
                          placeholder="Display name"
                          value={displayName}
                          onChange={setDisplayName}
                          disabled={loading}
                          maxLength={30}
                        />
                        <InputField
                          icon={<Mail className="w-4 h-4" />}
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={setEmail}
                          disabled={loading}
                        />
                        <PasswordField
                          value={password}
                          onChange={setPassword}
                          show={showPassword}
                          onToggle={() => setShowPassword(!showPassword)}
                          disabled={loading}
                          placeholder="Password (8+ characters)"
                        />

                        {error && <ErrorMessage message={error} />}

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 py-3 bg-atomic hover:bg-atomic/90 disabled:bg-atomic/50 text-white font-semibold rounded-xl transition-colors"
                        >
                          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Account"}
                        </button>

                        <p className="text-xs text-center text-muted-foreground">
                          You'll receive a verification email to confirm your account.
                        </p>
                      </form>
                    )}

                    {/* Forgot Password Form */}
                    {tab === "forgot" && (
                      <form onSubmit={handleForgotPassword} noValidate className="space-y-4">
                        <InputField
                          icon={<Mail className="w-4 h-4" />}
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={setEmail}
                          disabled={loading}
                        />

                        {error && <ErrorMessage message={error} />}

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 py-3 bg-doom hover:bg-doom/90 disabled:bg-doom/50 text-white font-semibold rounded-xl transition-colors"
                        >
                          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Reset Link"}
                        </button>

                        <button
                          type="button"
                          onClick={() => switchTab("login")}
                          className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Back to Sign In
                        </button>
                      </form>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  icon,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  maxLength,
}: {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
  maxLength?: number;
}) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
        className="w-full pl-10 pr-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-doom/50 focus:border-doom/50 transition-all disabled:opacity-50"
      />
    </div>
  );
}

function PasswordField({
  value,
  onChange,
  show,
  onToggle,
  disabled,
  placeholder = "Password",
}: {
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  onToggle: () => void;
  disabled: boolean;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
        <Lock className="w-4 h-4" />
      </div>
      <input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full pl-10 pr-10 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-doom/50 focus:border-doom/50 transition-all disabled:opacity-50"
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2 text-red-400 text-xs">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
