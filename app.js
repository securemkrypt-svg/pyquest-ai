/* ============================================================================
   pyB — Mobile-First Python Studio, Manifest Logo Sync & Profile AR Pop-Ups
   ============================================================================ */

const PYQUEST_CHAPTERS = [
  {
    id: 1,
    title: "Python Foundations & Memory",
    subtitle: "Variables, Object References, Dynamic Typing & Memory Model",
    lessons: [
      {
        id: "1-1",
        title: "Variables & Object References",
        caption: "Heap Memory Box Model",
        diagram: `<svg viewBox="0 0 540 150" class="w-full max-w-lg h-auto"><rect x="15" y="20" width="145" height="45" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/><text x="87" y="47" fill="#e0e7ff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">score = 100</text><rect x="15" y="85" width="145" height="45" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/><text x="87" y="112" fill="#e0e7ff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">bonus = score</text><path d="M160 42 L315 75" stroke="#fbbf24" stroke-width="3"/><path d="M160 108 L315 75" stroke="#34d399" stroke-width="3"/><rect x="320" y="30" width="200" height="90" rx="16" fill="#064e3b" stroke="#34d399" stroke-width="2.5"/><text x="420" y="65" fill="#fff" font-family="JetBrains Mono" font-size="18" font-weight="bold" text-anchor="middle">int: 100</text><text x="420" y="95" fill="#6ee7b7" font-family="JetBrains Mono" font-size="12" text-anchor="middle">Shared Heap Object</text></svg>`,
        theory: `<p>In Python, variables are <strong>reference labels</strong> pointing to objects in heap memory. Assigning <code>bonus = score</code> points both names to the exact same object without copying data.</p>`,
        code: `score = 100\nbonus = score\nprint(score is bonus)  # True`
      },
      {
        id: "1-2",
        title: "String Slicing & F-Strings",
        caption: "Zero-Indexed String Ruler",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="270" y="62" fill="#fbbf24" font-family="JetBrains Mono" font-size="16" font-weight="bold" text-anchor="middle">"PYTHON"[2:5]  →  "THO"   |   "PYTHON"[::-1]  →  "NOHTYP"</text></svg>`,
        theory: `<p>Strings are immutable sequences. Use <code>text[start:stop:step]</code> to slice cleanly, and <code>[::-1]</code> to reverse any sequence.</p>`,
        code: `word = "PYTHON"\nprint(word[2:5])   # THO\nprint(word[::-1])  # NOHTYP`
      },
      {
        id: "1-3",
        title: "Dynamic Typing & Type Casting",
        caption: "Safe Runtime Conversions",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="270" y="62" fill="#6ee7b7" font-family="JetBrains Mono" font-size="15" font-weight="bold" text-anchor="middle">"42" (str)  →  int("42")  →  42 (int)</text></svg>`,
        theory: `<p>Python checks types dynamically at runtime. Always convert user input strings explicitly using <code>int()</code> or <code>float()</code> before arithmetic.</p>`,
        code: `marks = int("98") + 2\nprint(f"Total: {marks}")`
      }
    ],
    challenges: [
      {
        level: "Beginner",
        title: "Swap Without Temp Variable",
        prompt: "Swap a = 15 and b = 42 in one Pythonic line.",
        starterCode: "a = 15\nb = 42\n# Swap below\n",
        expectedHint: "a, b = b, a",
        solutionCheck: (c) => c.includes("a, b = b, a") || c.includes("a,b = b,a")
      },
      {
        level: "Boss Challenge",
        title: "Palindrome Slice Check",
        prompt: "Check if word = 'madam' is a palindrome using slicing.",
        starterCode: "word = 'madam'\nis_pal = \nprint(is_pal)",
        expectedHint: "word == word[::-1]",
        solutionCheck: (c) => c.includes("[::-1]")
      },
      {
        level: "Extra",
        title: "Extract Email Domain",
        prompt: "Extract 'pyb.dev' from email = 'bhavagnya@pyb.dev'.",
        starterCode: "email = 'bhavagnya@pyb.dev'\ndomain = \nprint(domain)",
        expectedHint: "email.split('@')[1]",
        solutionCheck: (c) => c.includes("split")
      }
    ],
    interviewQuestions: [
      {
        q: "What is the difference between `is` and `==` in Python?",
        a: "`==` checks **value equality** (`__eq__`), while `is` checks **memory reference identity** (`id(a) == id(b)`).",
        code: "a = [1, 2]; b = [1, 2]\nprint(a == b, a is b)  # True False"
      },
      {
        q: "How does Python garbage collection work?",
        a: "Python combines immediate **Reference Counting** with a **Generational Cyclic Garbage Collector** (`gc`) to reclaim circular references.",
        code: "import sys\nprint(sys.getrefcount([1, 2, 3]))"
      }
    ]
  },
  {
    id: 2,
    title: "Control Flow & Match-Case",
    subtitle: "Conditionals, Short-Circuiting & Structural Pattern Matching",
    lessons: [
      {
        id: "2-1",
        title: "Short-Circuit Logic & Match-Case",
        caption: "Python 3.10+ Pattern Matching",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="270" y="60" fill="#6ee7b7" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">match action: case ("rank", tier): print(tier)</text></svg>`,
        theory: `<p>Use <code>name = user_input or "Bhavagnya"</code> for clean defaults via short-circuiting, and <code>match / case</code> to destructure tuples and dictionaries cleanly.</p>`,
        code: `action = ("level_up", "Gold")\nmatch action:\n    case ("level_up", rank):\n        print(f"Unlocked {rank}!")`
      },
      {
        id: "2-2",
        title: "Truthiness & Guard Clauses",
        caption: "Clean Early-Return Patterns",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/><text x="270" y="60" fill="#e0e7ff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">if not items: return  # Clean Guard Clause</text></svg>`,
        theory: `<p>Empty containers (<code>[]</code>, <code>{}</code>, <code>""</code>) evaluate to <code>False</code>. Use <code>if not items:</code> instead of <code>if len(items) == 0:</code>.</p>`,
        code: `skills = ["Python"]\nif skills:\n    print("Ready to interview!")`
      }
    ],
    challenges: [
      {
        level: "Beginner",
        title: "Leap Year Validator",
        prompt: "Check if year = 2028 is a leap year.",
        starterCode: "year = 2028\n# Write if condition\n",
        expectedHint: "(year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)",
        solutionCheck: (c) => c.includes("% 4")
      }
    ],
    interviewQuestions: [
      {
        q: "What values are Falsy in Python?",
        a: "`False`, `None`, `0`, `0.0`, `''`, `[]`, `()`, `{}`, and `set()`.",
        code: "if not []: print('Empty is Falsy')"
      }
    ]
  },
  {
    id: 3,
    title: "Loops, Comprehensions & Generators",
    subtitle: "enumerate(), zip(), List Comprehensions & Lazy yield",
    lessons: [
      {
        id: "3-1",
        title: "Comprehensions & Lazy Generators",
        caption: "O(1) Memory Streaming with yield",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#1e1b4b" stroke="#fbbf24" stroke-width="2"/><text x="270" y="60" fill="#fde047" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">[x**2 for x in range(10) if x % 2 == 0]</text></svg>`,
        theory: `<p>List comprehensions build lists at C-speed, while generator expressions <code>(x**2 for x in range(10**7))</code> compute items lazily one at a time in constant memory.</p>`,
        code: `evens = [x**2 for x in range(10) if x % 2 == 0]\nprint(evens)`
      }
    ],
    challenges: [
      {
        level: "Intermediate",
        title: "Zip Two Lists into a Dict",
        prompt: "Merge keys and vals into a dictionary using zip().",
        starterCode: "keys = ['name', 'tier']\nvals = ['Bhavagnya', 'Gold']\n# Merge below\n",
        expectedHint: "dict(zip(keys, vals))",
        solutionCheck: (c) => c.includes("zip")
      }
    ],
    interviewQuestions: [
      {
        q: "Difference between an Iterator and a Generator?",
        a: "An iterator implements `__iter__` and `__next__`. A generator is a simpler way to create an iterator using `yield`, automatically saving local state between calls.",
        code: "gen = (i for i in range(3))\nprint(next(gen))"
      }
    ]
  },
  {
    id: 4,
    title: "Data Structures & Big-O",
    subtitle: "Hash Tables, Dicts, Sets & Tuple Immutability",
    lessons: [
      {
        id: "4-1",
        title: "O(1) Hash Table Lookups",
        caption: "Constant-Time Dictionary & Set Access",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/><text x="270" y="60" fill="#a7f3d0" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">key → hash(key) → Slot[idx] in O(1) Time</text></svg>`,
        theory: `<p>Dictionaries and sets use hash tables, giving <strong>O(1) average lookup</strong> regardless of size.</p>`,
        code: `ranks = {"Bhavagnya": "Gold"}\nprint(ranks.get("Bhavagnya"))`
      }
    ],
    challenges: [
      {
        level: "Boss Challenge",
        title: "Two-Sum in O(n)",
        prompt: "Find two indices in nums = [2, 7, 11, 15] summing to target = 9 using a dict.",
        starterCode: "nums = [2, 7, 11, 15]\ntarget = 9\nseen = {}\n",
        expectedHint: "Check if target - num in seen",
        solutionCheck: (c) => c.includes("seen")
      }
    ],
    interviewQuestions: [
      {
        q: "Why can tuples be dict keys while lists cannot?",
        a: "Dict keys must be hashable and immutable. Lists can mutate, changing their hash.",
        code: "d = {(1, 2): 'ok'}"
      }
    ]
  },
  {
    id: 5,
    title: "Functions & Decorators",
    subtitle: "*args, **kwargs, Closures & @wrapper Functions",
    lessons: [
      {
        id: "5-1",
        title: "Decorators & First-Class Functions",
        caption: "Wrapping Functions Cleanly",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#312e81" stroke="#fbbf24" stroke-width="2"/><text x="270" y="60" fill="#fde047" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">@decorator → wrapper(*args, **kwargs)</text></svg>`,
        theory: `<p>Decorators wrap an existing function to add logging, timing, or caching without modifying the original function's code.</p>`,
        code: `from functools import wraps\ndef hype(fn):\n    @wraps(fn)\n    def wrap(*a, **kw): return fn(*a, **kw)\n    return wrap`
      }
    ],
    challenges: [
      {
        level: "Intermediate",
        title: "Fix Mutable Default Argument",
        prompt: "Safely initialize items=None instead of items=[].",
        starterCode: "def add_item(x, items=None):\n    pass",
        expectedHint: "if items is None: items = []",
        solutionCheck: (c) => c.includes("None")
      }
    ],
    interviewQuestions: [
      {
        q: "Why is `def f(x=[]):` dangerous?",
        a: "Default arguments are evaluated once at function definition time, so the same list is shared across all calls.",
        code: "def f(x=None): x = [] if x is None else x"
      }
    ]
  },
  {
    id: 6,
    title: "OOP, Dunder Methods & MRO",
    subtitle: "Classes, @dataclass & C3 Linearization",
    lessons: [
      {
        id: "6-1",
        title: "Classes & @dataclass Blueprints",
        caption: "Clean Object Modeling",
        diagram: `<svg viewBox="0 0 540 110" class="w-full max-w-lg h-auto"><rect x="30" y="20" width="480" height="70" rx="12" fill="#1e293b" stroke="#818cf8" stroke-width="2"/><text x="270" y="60" fill="#e0e7ff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">@dataclass class Learner: name: str; tier: str</text></svg>`,
        theory: `<p><code>@dataclass</code> automatically generates <code>__init__</code>, <code>__repr__</code>, and <code>__eq__</code> for clean data models.</p>`,
        code: `from dataclasses import dataclass\n@dataclass\nclass Learner:\n    name: str\n    tier: str = "Gold"`
      }
    ],
    challenges: [
      {
        level: "Intermediate",
        title: "Create Badge Dataclass",
        prompt: "Define @dataclass class Badge with title and points.",
        starterCode: "from dataclasses import dataclass\n",
        expectedHint: "@dataclass class Badge: title: str; points: int",
        solutionCheck: (c) => c.includes("Badge")
      }
    ],
    interviewQuestions: [
      {
        q: "What is MRO in Python?",
        a: "Method Resolution Order uses C3 Linearization (`Class.mro()`) to resolve inheritance deterministically.",
        code: "print(int.mro())"
      }
    ]
  }
];

// =============================================================================
// APPLICATION STATE
// =============================================================================
let state = {
  activeChapterIdx: 0,
  activeLessonIdx: 0,
  activeSubTab: 'theory',
  completedChapters: JSON.parse(localStorage.getItem('pyquest_completed_bhavagnya') || '[]'),
  visibleChallengesCount: {},
  masteredInterviews: JSON.parse(localStorage.getItem('pyquest_interviews_bhavagnya') || '[]'),
  avatarDataUrl: localStorage.getItem('pyquest_avatar_bhavagnya') || '',
  uploadedCodeImageBase64: '',
  customApiKey: localStorage.getItem('pyb_custom_gemini_key') || '',
  voicePersona: localStorage.getItem('pyb_voice_persona') || 'Sulafat'
};

PYQUEST_CHAPTERS.forEach(ch => {
  state.visibleChallengesCount[ch.id] = Math.min(2, ch.challenges.length);
});

// Funny & Uplifting AR Filter Presets (Rendered using Bhavagnya's Profile Image)
const FUNNY_MOOD_PRESETS = [
  {
    filterType: 'galaxy_brain',
    badge: 'GENIUS MODE 🧠🔥',
    quote: '"What, like Python is hard?" 💅',
    sub: "SHE'S UNSTOPPABLE! Keep shining, Bhavagnya!"
  },
  {
    filterType: 'neon_glasses',
    badge: 'BUG SLAYER 😎⚡',
    quote: 'Syntax errors see Bhavagnya and fix themselves!',
    sub: 'Hello Bhavagnya! ✨ Let’s Python!'
  },
  {
    filterType: 'cyber_crown',
    badge: 'QUEEN OF CODE 👑🚀',
    quote: 'Zero bugs, 100% swag, pure Python magic!',
    sub: 'Superstar Developer Vibes! ✨'
  },
  {
    filterType: 'telugu_swag',
    badge: 'MASS CODER 🔥😎',
    quote: 'Evadra Python kashtam annadhi? Bhavagnya ikkada!',
    sub: 'Full Josh & Zero Tension! 💪'
  },
  {
    filterType: 'star_eyes',
    badge: 'BRAIN OVERCLOCKED ⚡✨',
    quote: 'Coffee + Bhavagnya = Unstoppable Logic Engine!',
    sub: 'You are crushing every chapter!'
  }
];

// Telugu Meme & Mass Celebrations (Rendered using Bhavagnya's Profile Image)
const TELUGU_MEME_CELEBRATIONS = [
  {
    topBanner: 'THAGGEDHE LE! 🔥',
    bottomBanner: 'PYTHON KINGU... BHAVAGNYA QUEENU! 👑',
    punchline: '"Thaggedhe Le! 🔥 Ee range lo code chesthe Python kuda fans ayipothundi!"',
    filterType: 'cyber_crown'
  },
  {
    topBanner: 'MIND BLOCK CODING! 🧠⚡',
    bottomBanner: 'EVADRA AAPI CHUPINCHEDI! 😎',
    punchline: '"Mind Block! 🤯 Okka chapter kuda vadhalatledhu ga Bhavagnya!"',
    filterType: 'galaxy_brain'
  },
  {
    topBanner: 'MASS RAMPAGE! 🚀💥',
    bottomBanner: 'BUGS ANNI PACK UP! 💼🏃‍♂️',
    punchline: '"Mass Rampage! 💥 Bhavagnya code chusi bugs anni paripoyayi!"',
    filterType: 'neon_glasses'
  },
  {
    topBanner: 'AARADUGULA BULLET-U! 🎯🔥',
    bottomBanner: 'NEXT LEVEL PYTHONISTA! 🏆',
    punchline: '"Aaradugula Bullet-u! 🎯 Speed & accuracy lo thopu nuvvu!"',
    filterType: 'telugu_swag'
  }
];

// =============================================================================
// DEVELOPER-CONTROLLED MANIFEST.JSON LOGO SYNCHRONIZER
// =============================================================================
async function syncDeveloperManifestLogo() {
  try {
    const res = await fetch('./manifest.json', { cache: 'no-store' });
    if (!res.ok) return;
    const manifest = await res.json();
    const icons = Array.isArray(manifest.icons) ? manifest.icons : [];
    const primaryIcon = icons[icons.length - 1]?.src || icons[0]?.src;
    if (primaryIcon) {
      const fav = document.getElementById('manifestFaviconLink');
      const apple = document.getElementById('manifestAppleTouchIconLink');
      if (fav) fav.href = primaryIcon;
      if (apple) apple.href = primaryIcon;
    }
    if (manifest.theme_color) {
      document.getElementById('manifestThemeColorMeta')?.setAttribute('content', manifest.theme_color);
    }
    if (manifest.short_name) {
      document.title = `${manifest.short_name} — Bhavagnya's Mobile Python Studio`;
    }
  } catch (err) {
    // Runs silently when opened via local file:// protocol
  }
}

// =============================================================================
// PROFILE IMAGE UPLOAD & TIERED RANK FRAMES (BRONZE / SILVER / GOLD)
// =============================================================================
function processAvatarFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    state.avatarDataUrl = e.target.result;
    try {
      localStorage.setItem('pyquest_avatar_bhavagnya', state.avatarDataUrl);
    } catch (err) {}
    updateAvatarUI();
    showRandomFunnyMoodPopup(true);
  };
  reader.readAsDataURL(file);
}

function handleAvatarUpload(e) { processAvatarFile(e.target.files?.[0]); }
function handleAvatarDragOver(e) { e.preventDefault(); document.getElementById('avatarDropZone')?.classList.add('drop-active'); }
function handleAvatarDragLeave(e) { e.preventDefault(); document.getElementById('avatarDropZone')?.classList.remove('drop-active'); }
function handleAvatarDrop(e) {
  e.preventDefault();
  document.getElementById('avatarDropZone')?.classList.remove('drop-active');
  processAvatarFile(e.dataTransfer?.files?.[0]);
}

function getTierInfo(count) {
  if (count >= 5) {
    return { tier: 'gold', label: 'Gold Master', icon: 'fa-crown', frameClass: 'avatar-frame-gold', badgeClass: 'bg-amber-200 text-amber-950 border-amber-400', showSparkles: true };
  }
  if (count >= 3) {
    return { tier: 'silver', label: 'Silver Pythonista', icon: 'fa-shield-halved', frameClass: 'avatar-frame-silver', badgeClass: 'bg-slate-200 text-slate-800 border-slate-400', showSparkles: false };
  }
  if (count >= 1) {
    return { tier: 'bronze', label: 'Bronze Coder', icon: 'fa-medal', frameClass: 'avatar-frame-bronze', badgeClass: 'bg-amber-100 text-amber-900 border-amber-400', showSparkles: false };
  }
  return { tier: 'starter', label: 'Starter', icon: 'fa-rocket', frameClass: 'avatar-frame-starter', badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200', showSparkles: false };
}

function updateAvatarUI() {
  const count = state.completedChapters.length;
  const total = PYQUEST_CHAPTERS.length;
  const pct = Math.round((count / total) * 100);
  const tierInfo = getTierInfo(count);

  if (state.avatarDataUrl) {
    const img = document.getElementById('userAvatarImg');
    if (img) img.src = state.avatarDataUrl;
  }

  const outerFrame = document.getElementById('avatarOuterFrame');
  if (outerFrame) outerFrame.className = `${tierInfo.frameClass} p-[3px] rounded-full transition-all duration-500`;

  const badge = document.getElementById('tierBadge');
  if (badge) {
    badge.className = `inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${tierInfo.badgeClass}`;
    badge.innerHTML = `<i class="fa-solid ${tierInfo.icon} text-[9px]"></i> ${tierInfo.label}`;
  }

  document.getElementById('tierCrownIcon')?.classList.toggle('hidden', tierInfo.tier !== 'gold');
  document.getElementById('goldSparkles')?.classList.toggle('hidden', !tierInfo.showSparkles);

  const hc = document.getElementById('headerCompletedCount');
  const ht = document.getElementById('headerTotalChapters');
  const hb = document.getElementById('headerProgressBar');
  if (hc) hc.textContent = count;
  if (ht) ht.textContent = total;
  if (hb) hb.style.width = `${pct}%`;

  const mc = document.getElementById('mobileCompletedCount');
  const mb = document.getElementById('mobileProgressBar');
  if (mc) mc.textContent = `${count}/${total}`;
  if (mb) mb.style.width = `${pct}%`;
}

// =============================================================================
// AR FILTER COMPOSITOR (USES PROFILE IMAGE FOR 3s POP-UPS & TELUGU MEMES)
// =============================================================================
function renderFilteredBhavagnyaCanvas(canvas, filterType, topMemeText = '', bottomMemeText = '') {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const imgEl = document.getElementById('userAvatarImg');

  const drawAROverlays = () => {
    const tint = ctx.createLinearGradient(0, 0, w, h);
    tint.addColorStop(0, 'rgba(99, 102, 241, 0.14)');
    tint.addColorStop(1, 'rgba(245, 158, 11, 0.20)');
    ctx.fillStyle = tint;
    ctx.fillRect(0, 0, w, h);

    ctx.textAlign = 'center';
    if (filterType === 'galaxy_brain') {
      ctx.font = `${Math.round(w * 0.22)}px serif`;
      ctx.fillText('🧠✨', w * 0.5, h * 0.24);
      ctx.font = `${Math.round(w * 0.18)}px serif`;
      ctx.fillText('⭐🕶️⭐', w * 0.5, h * 0.54);
    } else if (filterType === 'neon_glasses') {
      ctx.font = `${Math.round(w * 0.24)}px serif`;
      ctx.fillText('🕶️⚡', w * 0.5, h * 0.52);
      ctx.font = `${Math.round(w * 0.15)}px serif`;
      ctx.fillText('✨💻✨', w * 0.5, h * 0.22);
    } else if (filterType === 'cyber_crown') {
      ctx.font = `${Math.round(w * 0.24)}px serif`;
      ctx.fillText('👑🔥', w * 0.5, h * 0.24);
      ctx.font = `${Math.round(w * 0.17)}px serif`;
      ctx.fillText('🤩', w * 0.82, h * 0.80);
    } else if (filterType === 'telugu_swag') {
      ctx.font = `${Math.round(w * 0.23)}px serif`;
      ctx.fillText('😎🔥', w * 0.5, h * 0.52);
      ctx.font = `${Math.round(w * 0.16)}px serif`;
      ctx.fillText('🚀💥', w * 0.5, h * 0.23);
    } else {
      ctx.font = `${Math.round(w * 0.22)}px serif`;
      ctx.fillText('🤩✨', w * 0.5, h * 0.52);
    }

    if (topMemeText) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
      ctx.fillRect(0, 0, w, h * 0.16);
      ctx.font = `900 ${Math.round(w * 0.068)}px "Plus Jakarta Sans", sans-serif`;
      ctx.fillStyle = '#fde047';
      ctx.fillText(topMemeText, w * 0.5, h * 0.115);
    }
    if (bottomMemeText) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.90)';
      ctx.fillRect(0, h * 0.83, w, h * 0.17);
      ctx.font = `800 ${Math.round(w * 0.05)}px "Plus Jakarta Sans", sans-serif`;
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(bottomMemeText, w * 0.5, h * 0.935);
    }
  };

  ctx.clearRect(0, 0, w, h);
  if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
    try {
      ctx.drawImage(imgEl, 0, 0, w, h);
      drawAROverlays();
      return;
    } catch (e) {}
  }

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#312e81');
  bg.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.font = `900 ${Math.round(w * 0.34)}px "Plus Jakarta Sans", sans-serif`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('B', w * 0.5, h * 0.62);
  drawAROverlays();
}

let funnyPopupHideTimer = null;
let funnyPopupRemoveTimer = null;
let lastPopupTimestamp = 0;

function showRandomFunnyMoodPopup(force = false) {
  const now = Date.now();
  if (!force && (now - lastPopupTimestamp < 4200 || Math.random() > 0.68)) {
    return;
  }
  lastPopupTimestamp = now;

  const popup = document.getElementById('funnyMoodPopup');
  if (!popup) return;

  const preset = FUNNY_MOOD_PRESETS[Math.floor(Math.random() * FUNNY_MOOD_PRESETS.length)];
  document.getElementById('funnyPopupBadge').textContent = preset.badge;
  document.getElementById('funnyPopupQuote').textContent = preset.quote;
  document.getElementById('funnyPopupSub').textContent = preset.sub;

  renderFilteredBhavagnyaCanvas(document.getElementById('funnyFilterCanvas'), preset.filterType);

  clearTimeout(funnyPopupHideTimer);
  clearTimeout(funnyPopupRemoveTimer);

  popup.classList.remove('hidden', 'funny-popup-exit');
  popup.classList.add('funny-popup-enter');

  // Auto-disappear after 3 seconds
  funnyPopupHideTimer = setTimeout(() => {
    popup.classList.remove('funny-popup-enter');
    popup.classList.add('funny-popup-exit');
    funnyPopupRemoveTimer = setTimeout(() => {
      popup.classList.add('hidden');
    }, 330);
  }, 3000);
}

document.addEventListener('click', (e) => {
  if (e.target.closest('#rankCelebrationModal') || e.target.closest('#apiSettingsModal')) return;
  showRandomFunnyMoodPopup(false);
});

// =============================================================================
// CHAPTER COMPLETION & TELUGU MEME CELEBRATION
// =============================================================================
function toggleChapterComplete() {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const prevTier = getTierInfo(state.completedChapters.length).tier;
  const idx = state.completedChapters.indexOf(ch.id);
  const nowCompleted = idx === -1;

  if (nowCompleted) state.completedChapters.push(ch.id);
  else state.completedChapters.splice(idx, 1);

  localStorage.setItem('pyquest_completed_bhavagnya', JSON.stringify(state.completedChapters));
  updateAvatarUI();
  renderChapterTabs();
  renderActiveChapter();

  if (nowCompleted) {
    const newTier = getTierInfo(state.completedChapters.length);
    const upgraded = newTier.tier !== prevTier;
    const meme = TELUGU_MEME_CELEBRATIONS[Math.floor(Math.random() * TELUGU_MEME_CELEBRATIONS.length)];

    document.getElementById('celebrationFramePreview').className = `w-44 h-44 mx-auto rounded-3xl p-1.5 ${newTier.frameClass} overflow-hidden shadow-xl`;
    document.getElementById('celebrationRankTag').textContent = upgraded ? `${newTier.label} Unlocked! 🏆` : meme.topBanner;
    document.getElementById('teluguMemePunchline').textContent = meme.punchline;
    document.getElementById('celebrationHeading').textContent = upgraded ? `Rank Up: ${newTier.label}!` : `Chapter ${ch.id} Mass Victory!`;
    document.getElementById('celebrationSubtext').textContent = `Completed "${ch.title}" (${state.completedChapters.length}/${PYQUEST_CHAPTERS.length} Chapters Mastered)!`;

    renderFilteredBhavagnyaCanvas(
      document.getElementById('achievementMemeCanvas'),
      meme.filterType,
      meme.topBanner,
      meme.bottomBanner
    );
    document.getElementById('rankCelebrationModal').classList.remove('hidden');
  }
}

// =============================================================================
// CHAPTERS, LESSONS, CHALLENGES & INTERVIEW QUESTIONS
// =============================================================================
function renderChapterTabs() {
  const el = document.getElementById('chapterTabsContainer');
  if (!el) return;
  el.innerHTML = PYQUEST_CHAPTERS.map((ch, idx) => {
    const active = idx === state.activeChapterIdx;
    const done = state.completedChapters.includes(ch.id);
    return `<button onclick="selectChapter(${idx})" class="lesson-pill px-4 py-2.5 rounded-2xl border text-left flex items-center gap-2 ${active ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white text-slate-700 border-slate-200'}">
      <span class="w-6 h-6 rounded-lg text-xs font-extrabold flex items-center justify-center ${done ? 'bg-emerald-500 text-white' : active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'}">${done ? '✓' : ch.id}</span>
      <span class="text-xs font-extrabold whitespace-nowrap">Ch ${ch.id}: ${ch.title}</span>
    </button>`;
  }).join('');
}

function selectChapter(idx) {
  state.activeChapterIdx = idx;
  state.activeLessonIdx = 0;
  renderChapterTabs();
  renderActiveChapter();
}

function scrollLessonPalette(delta) {
  document.getElementById('lessonPalette')?.scrollBy({ left: delta, behavior: 'smooth' });
}

function selectLesson(idx) {
  state.activeLessonIdx = idx;
  renderLessonPalette();
  renderActiveLesson();
}

function navigateLesson(dir) {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const next = state.activeLessonIdx + dir;
  if (next >= 0 && next < ch.lessons.length) selectLesson(next);
}

function renderLessonPalette() {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const counter = document.getElementById('lessonCounterPill');
  const palette = document.getElementById('lessonPalette');
  if (counter) counter.textContent = `Lesson ${state.activeLessonIdx + 1} of ${ch.lessons.length}`;
  if (palette) {
    palette.innerHTML = ch.lessons.map((l, idx) => `
      <button onclick="selectLesson(${idx})" id="lessonPill-${idx}" class="lesson-pill px-3.5 py-2 rounded-xl text-xs font-bold border ${idx === state.activeLessonIdx ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'}">
        ${idx + 1}. ${l.title}
      </button>`).join('');
    document.getElementById(`lessonPill-${state.activeLessonIdx}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function renderActiveLesson() {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const l = ch.lessons[state.activeLessonIdx] || ch.lessons[0];
  document.getElementById('lessonTag').textContent = `Lesson ${state.activeLessonIdx + 1} of ${ch.lessons.length}`;
  document.getElementById('lessonTitle').textContent = l.title;
  document.getElementById('diagramCaptionBadge').textContent = l.caption;
  document.getElementById('lessonVisualDiagram').innerHTML = l.diagram;
  document.getElementById('lessonTheoryContent').innerHTML = l.theory;
  document.getElementById('lessonCodeBlock').textContent = l.code;
}

function copyExampleCode() {
  const code = document.getElementById('lessonCodeBlock')?.textContent || '';
  const ta = document.createElement('textarea');
  ta.value = code;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

function switchSubTab(name) {
  ['theory', 'practice', 'interview'].forEach(t => {
    document.getElementById(`subTab-${t}`)?.classList.toggle('hidden', t !== name);
    const btn = document.getElementById(`tabBtn-${t}`);
    if (btn) {
      btn.className = t === name
        ? 'min-h-[46px] px-2 py-2.5 text-xs sm:text-sm font-extrabold border-b-2 border-indigo-600 text-indigo-600 text-center'
        : 'min-h-[46px] px-2 py-2.5 text-xs sm:text-sm font-extrabold border-b-2 border-transparent text-slate-500 text-center';
    }
  });
}

function renderChallenges() {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const count = state.visibleChallengesCount[ch.id] || 2;
  const shown = ch.challenges.slice(0, count);
  document.getElementById('challengeCounterBadge').textContent = `Showing ${shown.length} of ${ch.challenges.length}`;
  document.getElementById('challengesContainer').innerHTML = shown.map((c, idx) => `
    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-2.5">
      <div class="flex justify-between items-center">
        <span class="text-xs font-extrabold text-indigo-700">${c.level}: ${c.title}</span>
        <button onclick="document.getElementById('hint-${idx}').classList.toggle('hidden')" class="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 text-xs font-bold">Hint</button>
      </div>
      <p class="text-xs sm:text-sm text-slate-700">${c.prompt}</p>
      <div id="hint-${idx}" class="hidden text-xs font-mono bg-amber-50 p-2.5 rounded-xl border border-amber-200">💡 ${c.expectedHint}</div>
      <textarea id="code-${idx}" rows="3" class="w-full rounded-xl bg-slate-950 text-emerald-300 font-mono text-sm p-3">${c.starterCode}</textarea>
      <div class="flex justify-between items-center gap-2">
        <button onclick="checkChallenge(${idx})" class="min-h-[40px] px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs">Verify Solution</button>
        <span id="fb-${idx}" class="text-xs font-bold"></span>
      </div>
    </div>`).join('');

  const btn = document.getElementById('loadMoreChallengesBtn');
  const txt = document.getElementById('loadMoreBtnText');
  if (btn && txt) {
    if (count >= ch.challenges.length) {
      btn.disabled = true;
      btn.classList.add('opacity-50');
      txt.textContent = 'All Challenges Unlocked!';
    } else {
      btn.disabled = false;
      btn.classList.remove('opacity-50');
      txt.textContent = `Load More Challenges (+${ch.challenges.length - count} Extra)`;
    }
  }
}

function loadMoreChallenges() {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  state.visibleChallengesCount[ch.id] = ch.challenges.length;
  renderChallenges();
}

function checkChallenge(idx) {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx].challenges[idx];
  const val = document.getElementById(`code-${idx}`).value;
  const fb = document.getElementById(`fb-${idx}`);
  const ok = ch.solutionCheck(val);
  fb.textContent = ok ? '✅ Spot on, Bhavagnya!' : '⚠️ Check the Hint!';
  fb.className = ok ? 'text-xs font-bold text-emerald-600' : 'text-xs font-bold text-amber-600';
}

function renderInterviewQuestions() {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  document.getElementById('interviewChapterName').textContent = ch.title;
  document.getElementById('interviewCountBadge').textContent = ch.interviewQuestions.length;
  document.getElementById('interviewTotalCount').textContent = ch.interviewQuestions.length;
  const mastered = ch.interviewQuestions.filter((_, i) => state.masteredInterviews.includes(`${ch.id}-${i}`)).length;
  document.getElementById('interviewMasteredCount').textContent = mastered;

  document.getElementById('interviewQuestionsList').innerHTML = ch.interviewQuestions.map((item, idx) => {
    const key = `${ch.id}-${idx}`;
    const isMastered = state.masteredInterviews.includes(key);
    return `
      <div class="rounded-2xl border ${isMastered ? 'border-emerald-300 bg-emerald-50/30' : 'border-slate-200'} p-4 space-y-2">
        <button onclick="document.getElementById('iq-${idx}').classList.toggle('hidden')" class="w-full text-left font-extrabold text-sm text-slate-900 flex justify-between items-start gap-2">
          <span>Q${idx + 1}. ${item.q}</span>
          <i class="fa-solid fa-chevron-down text-xs text-slate-400 mt-1"></i>
        </button>
        <div id="iq-${idx}" class="hidden space-y-2.5 pt-2 border-t text-xs sm:text-sm text-slate-700">
          <p>${item.a}</p>
          <pre class="p-3 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto">${item.code}</pre>
          <button onclick="toggleMasteredInterview(${idx})" class="min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold ${isMastered ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}">
            ${isMastered ? '✓ Mastered' : 'Mark Mastered'}
          </button>
        </div>
      </div>`;
  }).join('');
}

function toggleMasteredInterview(idx) {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const key = `${ch.id}-${idx}`;
  const pos = state.masteredInterviews.indexOf(key);
  if (pos === -1) state.masteredInterviews.push(key);
  else state.masteredInterviews.splice(pos, 1);
  localStorage.setItem('pyquest_interviews_bhavagnya', JSON.stringify(state.masteredInterviews));
  renderInterviewQuestions();
}

function renderActiveChapter() {
  const ch = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const done = state.completedChapters.includes(ch.id);
  document.getElementById('activeChapterBadge').textContent = `Chapter ${ch.id}`;
  document.getElementById('activeChapterTitle').textContent = ch.title;
  document.getElementById('activeChapterSubtitle').textContent = ch.subtitle;
  document.getElementById('chapterStatusTag').textContent = done ? 'Completed ✓' : 'In Progress';
  document.getElementById('completeChapterBtn').textContent = done ? 'Chapter Mastered! (Tap to Undo)' : 'Mark Chapter Complete & Upgrade Rank';
  renderLessonPalette();
  renderActiveLesson();
  renderChallenges();
  renderInterviewQuestions();
}

// =============================================================================
// GEMINI API SETTINGS, NATURAL VOICE & VISION SCANNER
// =============================================================================
function openApiSettingsModal() {
  document.getElementById('customApiKeyInput').value = state.customApiKey;
  document.getElementById('voicePersonaSelect').value = state.voicePersona;
  document.getElementById('apiSettingsModal').classList.remove('hidden');
}
function closeApiSettingsModal() { document.getElementById('apiSettingsModal').classList.add('hidden'); }
function saveVoicePreference() {
  state.voicePersona = document.getElementById('voicePersonaSelect').value;
  localStorage.setItem('pyb_voice_persona', state.voicePersona);
}
function saveCustomApiKey() {
  state.customApiKey = document.getElementById('customApiKeyInput').value.trim();
  localStorage.setItem('pyb_custom_gemini_key', state.customApiKey);
  saveVoicePreference();
  const fb = document.getElementById('apiKeyTestFeedback');
  fb.textContent = '✅ API Key & Soft Voice saved!';
  fb.className = 'text-xs font-bold p-2.5 rounded-xl bg-emerald-50 text-emerald-800';
  fb.classList.remove('hidden');
}

function toggleVoiceTutorModal(show) {
  document.getElementById('voiceTutorModal').classList.toggle('hidden', !show);
  if (!show) stopAllAiAudio();
}

function askLessonDoubt() {
  toggleVoiceTutorModal(true);
  document.getElementById('aiTextInput').value = `Explain ${PYQUEST_CHAPTERS[state.activeChapterIdx].lessons[state.activeLessonIdx].title}`;
  sendAiDoubt();
}

function readLessonAloud() {
  speakText(document.getElementById('lessonTheoryContent').innerText);
}

function stopAllAiAudio() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById('stopSpeakingBtn')?.classList.add('hidden');
}

function speakText(text) {
  stopAllAiAudio();
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.94;
    u.pitch = 1.02;
    document.getElementById('stopSpeakingBtn')?.classList.remove('hidden');
    u.onend = () => document.getElementById('stopSpeakingBtn')?.classList.add('hidden');
    window.speechSynthesis.speak(u);
  }
}

let recognition = null;
let isListening = false;
function toggleVoiceRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;
  if (isListening) { recognition.stop(); return; }
  recognition = new SR();
  recognition.lang = 'en-IN';
  recognition.onstart = () => { isListening = true; document.getElementById('voiceStatusBanner').classList.remove('hidden'); };
  recognition.onresult = (e) => { document.getElementById('aiTextInput').value = e.results[0][0].transcript; };
  recognition.onend = () => {
    isListening = false;
    document.getElementById('voiceStatusBanner').classList.add('hidden');
    if (document.getElementById('aiTextInput').value.trim()) sendAiDoubt();
  };
  recognition.start();
}
function stopVoiceRecognition() { if (recognition) recognition.stop(); }

async function sendAiDoubt() {
  const inp = document.getElementById('aiTextInput');
  const q = inp.value.trim();
  if (!q) return;
  inp.value = '';
  const feed = document.getElementById('aiChatMessages');
  feed.innerHTML += `<div class="text-right"><span class="inline-block bg-indigo-600 text-white rounded-2xl px-3.5 py-2 text-xs sm:text-sm">${q}</span></div>`;
  feed.scrollTop = feed.scrollHeight;

  if (!state.customApiKey) {
    const msg = "Tap the top-left pyB logo to paste your Gemini API key for live AI answers, Bhavagnya!";
    feed.innerHTML += `<div><span class="inline-block bg-white border rounded-2xl px-3.5 py-2 text-xs sm:text-sm">${msg}</span></div>`;
    if (document.getElementById('autoSpeakToggle').checked) speakText(msg);
    return;
  }

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${state.customApiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: `Warmly tutor Bhavagnya concisely: ${q}` }] }] })
    });
    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Keep practicing Python, Bhavagnya!";
    feed.innerHTML += `<div><span class="inline-block bg-white border rounded-2xl px-3.5 py-2 text-xs sm:text-sm">${reply}</span></div>`;
    feed.scrollTop = feed.scrollHeight;
    if (document.getElementById('autoSpeakToggle').checked) speakText(reply);
  } catch (e) {}
}

function openImageOverlayModal() { document.getElementById('imageOverlayModal').classList.remove('hidden'); }
function closeImageOverlayModal() { document.getElementById('imageOverlayModal').classList.add('hidden'); }
function handleCodeImageUpload(e) {
  const f = e.target.files?.[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = (ev) => {
    document.getElementById('codeImagePreview').src = ev.target.result;
    document.getElementById('codeImagePreviewWrap').classList.remove('hidden');
    state.uploadedCodeImageBase64 = ev.target.result.split(',')[1];
  };
  r.readAsDataURL(f);
}
function handleCodeDropZoneDragOver(e) { e.preventDefault(); }
function handleCodeDropZoneDragLeave(e) { e.preventDefault(); }
function handleCodeDropZoneDrop(e) {
  e.preventDefault();
  if (e.dataTransfer?.files?.[0]) handleCodeImageUpload({ target: { files: e.dataTransfer.files } });
}

async function analyzeUploadedCodeImage() {
  const box = document.getElementById('codeImageResult');
  box.classList.remove('hidden');
  if (!state.customApiKey) {
    box.textContent = "Tap the top-left pyB logo to enter your Gemini API key first!";
    return;
  }
  box.textContent = "Scanning screenshot...";
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${state.customApiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: document.getElementById('codeImagePrompt').value },
          { inlineData: { mimeType: 'image/png', data: state.uploadedCodeImageBase64 } }
        ]
      }]
    })
  });
  const data = await res.json();
  box.textContent = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Done!";
}

function openContactModal() { document.getElementById('contactSupportModal').classList.remove('hidden'); }
function closeContactModal() { document.getElementById('contactSupportModal').classList.add('hidden'); }
async function submitGoogleSupportForm(e) {
  e.preventDefault();
  const params = new URLSearchParams();
  params.append('entry.2005620554', document.getElementById('formStudentName').value);
  params.append('entry.1045781291', document.getElementById('formTopic').value);
  params.append('entry.839337160', document.getElementById('formMessage').value);
  params.append('fvv', '1');
  params.append('pageHistory', '0');
  params.append('fbzx', '3704502448696650615');
  params.append('submissionTimestamp', '-1');
  await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdbHIqr4nTI1AKzI2ZRiSFoS_4dKEuKtLObcWbmi4LR8MYJMQ/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  });
  const st = document.getElementById('formSubmitStatus');
  st.textContent = '✅ Doubt sent to mentor!';
  st.className = 'text-xs font-bold text-emerald-700';
  st.classList.remove('hidden');
}

// =============================================================================
// INITIALIZE MOBILE APP
// =============================================================================
window.addEventListener('DOMContentLoaded', () => {
  syncDeveloperManifestLogo();
  updateAvatarUI();
  renderChapterTabs();
  renderActiveChapter();
  // Greet Bhavagnya on mobile launch for 3 seconds
  setTimeout(() => showRandomFunnyMoodPopup(true), 450);
});
