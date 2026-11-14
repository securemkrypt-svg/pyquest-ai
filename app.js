/* ============================================================================
   pyB — Interactive Python Learning Curriculum, Voice AI & Dynamic Icon Engine
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
        diagram: `
          <svg viewBox="0 0 540 165" class="w-full max-w-lg h-auto">
            <rect x="15" y="25" width="140" height="45" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
            <text x="85" y="52" fill="#e0e7ff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">score = 100</text>
            <rect x="15" y="95" width="140" height="45" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
            <text x="85" y="122" fill="#e0e7ff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">bonus = score</text>
            <path d="M155 48 C 230 48, 240 82, 315 82" stroke="#fbbf24" stroke-width="3" fill="none" stroke-dasharray="5,3"/>
            <path d="M155 118 C 230 118, 240 82, 315 82" stroke="#34d399" stroke-width="3" fill="none"/>
            <polygon points="315,82 305,76 305,88" fill="#fbbf24"/>
            <rect x="320" y="32" width="200" height="100" rx="16" fill="#064e3b" stroke="#34d399" stroke-width="2.5"/>
            <text x="420" y="62" fill="#6ee7b7" font-family="Plus Jakarta Sans" font-size="12" font-weight="bold" text-anchor="middle">PYTHON HEAP OBJECT</text>
            <text x="420" y="90" fill="#ffffff" font-family="JetBrains Mono" font-size="20" font-weight="bold" text-anchor="middle">int: 100</text>
            <text x="420" y="114" fill="#a7f3d0" font-family="JetBrains Mono" font-size="11" text-anchor="middle">id: 0x7ff9a210</text>
          </svg>`,
        theory: `
          <p>In Python, variables are <strong>not rigid boxes</strong> that hold raw bytes like in C or Java. Instead, every variable is a <strong>sticky-note label (reference)</strong> pointing to an object stored in Python's private heap memory.</p>
          <p>When Bhavagnya writes <code>score = 100</code> and then <code>bonus = score</code>, Python does <strong>not</strong> copy <code>100</code>. Both labels point to the exact same <code>int</code> object in memory, saving RAM and making assignments instantaneous.</p>
        `,
        code: `# Variables point to objects in memory
score = 100
bonus = score

print("Same memory ID?", id(score) == id(bonus))  # True
print("Identity check:", score is bonus)           # True`
      },
      {
        id: "1-2",
        title: "Core Data Types & Dynamic Typing",
        caption: "Type Hierarchy Visual",
        diagram: `
          <svg viewBox="0 0 540 155" class="w-full max-w-lg h-auto">
            <rect x="195" y="10" width="150" height="36" rx="10" fill="#4f46e5" stroke="#a5b4fc" stroke-width="2"/>
            <text x="270" y="33" fill="#fff" font-family="Plus Jakarta Sans" font-size="13" font-weight="bold" text-anchor="middle">Python Objects</text>
            <line x1="270" y1="46" x2="75" y2="85" stroke="#94a3b8" stroke-width="2"/>
            <line x1="270" y1="46" x2="205" y2="85" stroke="#94a3b8" stroke-width="2"/>
            <line x1="270" y1="46" x2="335" y2="85" stroke="#94a3b8" stroke-width="2"/>
            <line x1="270" y1="46" x2="465" y2="85" stroke="#94a3b8" stroke-width="2"/>
            <rect x="20" y="85" width="110" height="55" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <text x="75" y="108" fill="#38bdf8" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">int / float</text>
            <text x="75" y="127" fill="#cbd5e1" font-family="JetBrains Mono" font-size="11" text-anchor="middle">42, 3.14</text>
            <rect x="150" y="85" width="110" height="55" rx="10" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
            <text x="205" y="108" fill="#fbbf24" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">str</text>
            <text x="205" y="127" fill="#cbd5e1" font-family="JetBrains Mono" font-size="11" text-anchor="middle">"Bhavagnya"</text>
            <rect x="280" y="85" width="110" height="55" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
            <text x="335" y="108" fill="#34d399" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">bool</text>
            <text x="335" y="127" fill="#cbd5e1" font-family="JetBrains Mono" font-size="11" text-anchor="middle">True / False</text>
            <rect x="410" y="85" width="110" height="55" rx="10" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
            <text x="465" y="108" fill="#f472b6" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">NoneType</text>
            <text x="465" y="127" fill="#cbd5e1" font-family="JetBrains Mono" font-size="11" text-anchor="middle">None</text>
          </svg>`,
        theory: `
          <p>Python is <strong>dynamically typed</strong> yet <strong>strongly typed</strong>. You don't declare types upfront—the type belongs to the value at runtime, and Python strictly prevents invalid operations like adding a string directly to an integer without conversion.</p>
          <p>Use <code>type(x)</code> to inspect any object's class, and <code>isinstance(x, int)</code> in production code to validate inputs safely.</p>
        `,
        code: `student = "Bhavagnya"
rank_points = 98.5
is_gold = True

print(type(student))      # <class 'str'>
print(f"{student} scored {int(rank_points)} points!")`
      },
      {
        id: "1-3",
        title: "String Slicing & F-Strings",
        caption: "Zero-Indexed String Ruler",
        diagram: `
          <svg viewBox="0 0 540 140" class="w-full max-w-lg h-auto">
            <g font-family="JetBrains Mono" font-size="15" font-weight="bold" text-anchor="middle">
              <rect x="60" y="42" width="65" height="45" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/><text x="92" y="70" fill="#fff">P</text><text x="92" y="30" fill="#38bdf8" font-size="12">0</text><text x="92" y="108" fill="#f472b6" font-size="12">-6</text>
              <rect x="130" y="42" width="65" height="45" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/><text x="162" y="70" fill="#fff">Y</text><text x="162" y="30" fill="#38bdf8" font-size="12">1</text><text x="162" y="108" fill="#f472b6" font-size="12">-5</text>
              <rect x="200" y="42" width="65" height="45" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2.5"/><text x="232" y="70" fill="#6ee7b7">T</text><text x="232" y="30" fill="#38bdf8" font-size="12">2</text><text x="232" y="108" fill="#f472b6" font-size="12">-4</text>
              <rect x="270" y="42" width="65" height="45" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2.5"/><text x="302" y="70" fill="#6ee7b7">H</text><text x="302" y="30" fill="#38bdf8" font-size="12">3</text><text x="302" y="108" fill="#f472b6" font-size="12">-3</text>
              <rect x="340" y="42" width="65" height="45" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2.5"/><text x="372" y="70" fill="#6ee7b7">O</text><text x="372" y="30" fill="#38bdf8" font-size="12">4</text><text x="372" y="108" fill="#f472b6" font-size="12">-2</text>
              <rect x="410" y="42" width="65" height="45" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2"/><text x="442" y="70" fill="#fff">N</text><text x="442" y="30" fill="#38bdf8" font-size="12">5</text><text x="442" y="108" fill="#f472b6" font-size="12">-1</text>
            </g>
            <text x="270" y="132" fill="#fbbf24" font-family="JetBrains Mono" font-size="12" text-anchor="middle">word[2:5] -> "THO" (stop index 5 is excluded)</text>
          </svg>`,
        theory: `
          <p>Strings in Python are <strong>immutable sequences</strong> of Unicode characters. You can slice any string using <code>text[start:stop:step]</code>, where <code>start</code> is inclusive and <code>stop</code> is exclusive.</p>
          <p>Negative indices count backwards from the end (<code>-1</code> is always the last character), and <code>text[::-1]</code> reverses a string in one clean expression.</p>
        `,
        code: `word = "PYTHON"
print(word[2:5])    # THO
print(word[::-1])   # NOHTYP`
      },
      {
        id: "1-4",
        title: "Type Casting & Safe Input",
        caption: "Conversion Pipeline",
        diagram: `
          <svg viewBox="0 0 540 120" class="w-full max-w-lg h-auto">
            <rect x="25" y="35" width="130" height="50" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
            <text x="90" y="65" fill="#fbbf24" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">"42" (str)</text>
            <path d="M160 60 L225 60" stroke="#38bdf8" stroke-width="3"/>
            <polygon points="225,60 215,54 215,66" fill="#38bdf8"/>
            <rect x="230" y="35" width="100" height="50" rx="12" fill="#4f46e5"/>
            <text x="280" y="65" fill="#fff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">int()</text>
            <path d="M335 60 L395 60" stroke="#34d399" stroke-width="3"/>
            <polygon points="395,60 385,54 385,66" fill="#34d399"/>
            <rect x="400" y="35" width="115" height="50" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <text x="457" y="65" fill="#6ee7b7" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">42 (int)</text>
          </svg>`,
        theory: `
          <p>User input via <code>input()</code> always returns a <code>str</code>. Converting explicitly with <code>int()</code>, <code>float()</code>, or <code>bool()</code> prevents runtime type mismatches.</p>
          <p>Remember Python's <strong>Falsy values</strong>: <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>None</code>, and <code>False</code> all evaluate to <code>False</code> in boolean checks.</p>
        `,
        code: `raw_age = "21"
next_age = int(raw_age) + 1
print(f"Next milestone: {next_age}")`
      },
      {
        id: "1-5",
        title: "Operators & Precedence (PEMDAS)",
        caption: "Operator Evaluation Order",
        diagram: `
          <svg viewBox="0 0 540 120" class="w-full max-w-lg h-auto">
            <rect x="20" y="25" width="500" height="70" rx="14" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
            <text x="270" y="55" fill="#e0e7ff" font-family="JetBrains Mono" font-size="15" font-weight="bold" text-anchor="middle">()  →  **  →  *, /, //, %  →  +, -  →  ==, is, in  →  not, and, or</text>
            <text x="270" y="80" fill="#fbbf24" font-family="Plus Jakarta Sans" font-size="12" text-anchor="middle">Highest Priority (Left) to Lowest Priority (Right)</text>
          </svg>`,
        theory: `
          <p>Python provides floor division (<code>//</code>) which rounds down to the nearest integer, modulo (<code>%</code>) for remainders, and exponentiation (<code>**</code>) for powers.</p>
          <p>Always use parentheses when mixing arithmetic and logical operators so your intent is unmistakable to every teammate reading your code.</p>
        `,
        code: `print(17 // 5)   # 3 (floor division)
print(17 % 5)    # 2 (remainder)
print(2 ** 4)    # 16 (power)`
      }
    ],
    challenges: [
      {
        level: "Beginner",
        title: "Swap Without Temp Variable",
        prompt: "Given a = 15 and b = 42, swap their values in a single Pythonic line and print a, b.",
        starterCode: "a = 15\nb = 42\n# Write your single-line swap below\n",
        expectedHint: "Use tuple unpacking: a, b = b, a",
        solutionCheck: (code) => code.includes("a, b = b, a") || code.includes("a,b = b,a")
      },
      {
        level: "Beginner",
        title: "Palindrome Slice Check",
        prompt: "Write an expression that checks if word = 'madam' reads the same backwards using slicing.",
        starterCode: "word = 'madam'\nis_pal = # your slice check\nprint(is_pal)",
        expectedHint: "Compare word == word[::-1]",
        solutionCheck: (code) => code.includes("[::-1]")
      },
      {
        level: "Intermediate",
        title: "Extract Domain from Email",
        prompt: "Given email = 'bhavagnya@pyquest.dev', extract 'pyquest.dev' using string splitting or slicing.",
        starterCode: "email = 'bhavagnya@pyquest.dev'\ndomain = # extract domain\nprint(domain)",
        expectedHint: "Use email.split('@')[1]",
        solutionCheck: (code) => code.includes("split") || code.includes("index") || code.includes("find")
      },
      {
        level: "Boss Challenge",
        title: "Memory Identity Trap",
        prompt: "Create two lists x = [1, 2] and y = [1, 2]. Print whether (x == y) and (x is y).",
        starterCode: "x = [1, 2]\ny = [1, 2]\n# Print equality vs identity\n",
        expectedHint: "x == y is True (same values), x is y is False (different list objects).",
        solutionCheck: (code) => code.includes("==") && code.includes("is")
      }
    ],
    interviewQuestions: [
      {
        q: "What is the exact difference between `is` and `==` in Python?",
        a: "`==` checks **value equality** (calls `__eq__()`), verifying whether two objects hold the same data. `is` checks **reference identity** (compares `id(a) == id(b)`), verifying whether both variables point to the exact same object in memory.",
        code: "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b)  # True (equal contents)\nprint(a is b)  # False (two distinct list objects)"
      },
      {
        q: "Why does `a = 256; b = 256; a is b` return True, while `257` may return False?",
        a: "CPython pre-allocates and caches small integer objects in the range **[-5, 256]** at startup (Integer Interning) for performance. Any variable assigned an integer in that range points to the same cached singleton object.",
        code: "x, y = 256, 256\nprint(x is y)  # True (cached singleton)"
      },
      {
        q: "What is the difference between Mutable and Immutable objects in Python?",
        a: "**Immutable** objects (`int`, `float`, `str`, `tuple`, `frozenset`) cannot be modified in place after creation; any operation creates a new object. **Mutable** objects (`list`, `dict`, `set`) can be changed in place while keeping the same memory address (`id`).",
        code: "s = 'hi'\nprint(id(s))\ns += '!'  # Creates a brand new str object\nprint(id(s))"
      },
      {
        q: "How does Python manage memory and garbage collection?",
        a: "Python uses **Reference Counting** as its primary memory management mechanism (freeing objects the instant their reference count hits zero) combined with a **Generational Cyclic Garbage Collector** (`gc` module) to detect and clean up circular references.",
        code: "import sys\narr = [1, 2, 3]\nprint(sys.getrefcount(arr))  # Shows active references"
      }
    ]
  },
  {
    id: 2,
    title: "Control Flow & Decision Logic",
    subtitle: "Conditionals, Truthiness, Match-Case & Boolean Short-Circuiting",
    lessons: [
      {
        id: "2-1",
        title: "If / Elif / Else Decision Trees",
        caption: "Branching Execution Flow",
        diagram: `
          <svg viewBox="0 0 540 165" class="w-full max-w-lg h-auto">
            <polygon points="270,12 365,52 270,92 175,52" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
            <text x="270" y="56" fill="#fff" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">score >= 90?</text>
            <line x1="175" y1="52" x2="95" y2="52" stroke="#34d399" stroke-width="2.5"/>
            <line x1="95" y1="52" x2="95" y2="105" stroke="#34d399" stroke-width="2.5"/>
            <text x="135" y="44" fill="#34d399" font-size="11" font-weight="bold">True</text>
            <rect x="30" y="105" width="130" height="42" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <text x="95" y="130" fill="#6ee7b7" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">Gold Rank 🏆</text>
            <line x1="365" y1="52" x2="445" y2="52" stroke="#f87171" stroke-width="2.5"/>
            <line x1="445" y1="52" x2="445" y2="105" stroke="#f87171" stroke-width="2.5"/>
            <text x="405" y="44" fill="#f87171" font-size="11" font-weight="bold">False</text>
            <rect x="380" y="105" width="130" height="42" rx="10" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
            <text x="445" y="130" fill="#e2e8f0" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">Check elif...</text>
          </svg>`,
        theory: `
          <p>Python uses <strong>indentation (4 spaces)</strong> instead of curly braces to define code blocks. As soon as one branch in an <code>if / elif / else</code> chain evaluates to <code>True</code>, Python executes that block and skips all remaining branches.</p>
          <p>For concise single-line assignments, use Python's ternary expression: <code>status = "Pass" if marks >= 40 else "Retry"</code>.</p>
        `,
        code: `chapters = 5
tier = "Gold" if chapters >= 5 else "Silver" if chapters >= 3 else "Bronze"
print(f"Bhavagnya's Tier: {tier}")`
      },
      {
        id: "2-2",
        title: "Short-Circuit Logic (and / or)",
        caption: "Lazy Evaluation Gate",
        diagram: `
          <svg viewBox="0 0 540 120" class="w-full max-w-lg h-auto">
            <rect x="25" y="30" width="150" height="55" rx="12" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
            <text x="100" y="55" fill="#fecaca" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">False and ...</text>
            <text x="100" y="73" fill="#fca5a5" font-size="10" text-anchor="middle">Stops immediately!</text>
            <rect x="205" y="30" width="150" height="55" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <text x="280" y="55" fill="#a7f3d0" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">True or ...</text>
            <text x="280" y="73" fill="#6ee7b7" font-size="10" text-anchor="middle">Stops immediately!</text>
            <rect x="385" y="30" width="130" height="55" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
            <text x="450" y="55" fill="#e0e7ff" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">name or "Guest"</text>
            <text x="450" y="73" fill="#c7d2fe" font-size="10" text-anchor="middle">Fallback pattern</text>
          </svg>`,
        theory: `
          <p>Python's <code>and</code> and <code>or</code> operators <strong>short-circuit</strong>—they stop evaluating the moment the outcome is guaranteed, and they return the <em>actual operand value</em> rather than strictly <code>True</code> or <code>False</code>.</p>
          <p>This makes <code>username = input_name or "Bhavagnya"</code> a beloved Pythonic idiom for setting safe defaults.</p>
        `,
        code: `user_input = ""
display_name = user_input or "Bhavagnya"
print(display_name)  # Bhavagnya`
      },
      {
        id: "2-3",
        title: "Structural Pattern Matching (match-case)",
        caption: "Python 3.10+ Match Engine",
        diagram: `
          <svg viewBox="0 0 540 120" class="w-full max-w-lg h-auto">
            <rect x="30" y="20" width="480" height="80" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <text x="270" y="50" fill="#38bdf8" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">match command: case ["move", x, y]: ...</text>
            <text x="270" y="76" fill="#cbd5e1" font-family="Plus Jakarta Sans" font-size="12" text-anchor="middle">Unpacks tuples, lists & dicts cleanly without messy nested ifs</text>
          </svg>`,
        theory: `
          <p>Introduced in Python 3.10, <code>match / case</code> goes far beyond traditional C-style switch statements—it can destructure sequences, dictionaries, and class attributes directly in each <code>case</code> arm, with <code>case _:</code> acting as the wildcard default.</p>
        `,
        code: `action = ("level_up", "Gold")
match action:
    case ("level_up", rank):
        print(f"Unlocked {rank} Frame!")
    case _:
        print("Keep coding!")`
      }
    ],
    challenges: [
      {
        level: "Beginner",
        title: "Leap Year Validator",
        prompt: "Write an if condition that prints 'Leap' if year = 2028 is divisible by 400 OR (divisible by 4 and not 100).",
        starterCode: "year = 2028\n# Write leap year logic\n",
        expectedHint: "if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):",
        solutionCheck: (code) => code.includes("% 4") && code.includes("if")
      },
      {
        level: "Intermediate",
        title: "Safe Division Guard",
        prompt: "Use short-circuiting so `b != 0 and (a / b) > 2` never raises ZeroDivisionError when b = 0.",
        starterCode: "a, b = 10, 0\nresult = # safe short-circuit check\nprint(result)",
        expectedHint: "b != 0 and (a / b) > 2 evaluates to False without dividing by zero!",
        solutionCheck: (code) => code.includes("and") && code.includes("b")
      },
      {
        level: "Boss Challenge",
        title: "Command Router with Match-Case",
        prompt: "Use match-case on cmd = ['deploy', 'prod'] to print 'Deploying to prod'.",
        starterCode: "cmd = ['deploy', 'prod']\n# Write match-case\n",
        expectedHint: "match cmd: case ['deploy', env]: print(f'Deploying to {env}')",
        solutionCheck: (code) => code.includes("match") && code.includes("case")
      }
    ],
    interviewQuestions: [
      {
        q: "What values are considered Falsy in Python?",
        a: "`False`, `None`, numeric zeroes (`0`, `0.0`, `0j`), empty sequences (`''`, `[]`, `()`), empty mappings/sets (`{}`, `set()`), and objects whose `__bool__()` returns `False` or `__len__()` returns `0`.",
        code: "items = []\nif not items:\n    print('Empty container is Falsy!')"
      },
      {
        q: "How does `all()` vs `any()` work with short-circuiting?",
        a: "`all(iterable)` returns `True` if every element is truthy (stops at the first falsy item). `any(iterable)` returns `True` if at least one element is truthy (stops at the first truthy item). Both run in O(1) extra space.",
        code: "nums = [2, 4, 6, 7]\nprint(all(n % 2 == 0 for n in nums))  # False (stops at 7)"
      },
      {
        q: "What is the Walrus Operator (`:=`) and when should you use it?",
        a: "Introduced in Python 3.8, `:=` (Assignment Expression) assigns a value to a variable as part of an expression, avoiding redundant function calls inside `if` or `while` headers.",
        code: "data = [1, 2, 3, 4, 5, 6]\nif (n := len(data)) > 5:\n    print(f'Large list of {n} items')"
      }
    ]
  },
  {
    id: 3,
    title: "Loops & Iteration Mastery",
    subtitle: "For/While Loops, Enumerate, Zip, Generators & Comprehensions",
    lessons: [
      {
        id: "3-1",
        title: "Pythonic Loops: enumerate() & zip()",
        caption: "Iterator Pairing Pipeline",
        diagram: `
          <svg viewBox="0 0 540 140" class="w-full max-w-lg h-auto">
            <rect x="30" y="20" width="210" height="40" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <text x="135" y="45" fill="#38bdf8" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">names = ["A", "B"]</text>
            <rect x="30" y="80" width="210" height="40" rx="10" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
            <text x="135" y="105" fill="#fbbf24" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">scores = [95, 99]</text>
            <path d="M245 40 L315 70" stroke="#34d399" stroke-width="2.5"/>
            <path d="M245 100 L315 70" stroke="#34d399" stroke-width="2.5"/>
            <rect x="320" y="35" width="195" height="70" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <text x="417" y="65" fill="#fff" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">zip(names, scores)</text>
            <text x="417" y="88" fill="#6ee7b7" font-family="JetBrains Mono" font-size="11" text-anchor="middle">('A', 95), ('B', 99)</text>
          </svg>`,
        theory: `
          <p>Avoid writing C-style <code>for i in range(len(items)):</code> loops in Python! Instead, iterate directly over elements, use <code>enumerate(items, start=1)</code> when you need an index counter, and use <code>zip(list1, list2)</code> to walk through multiple sequences in lockstep.</p>
        `,
        code: `topics = ["Variables", "Loops", "Functions"]
for idx, topic in enumerate(topics, start=1):
    print(f"{idx}. {topic}")`
      },
      {
        id: "3-2",
        title: "List & Dict Comprehensions",
        caption: "One-Line Transformation Engine",
        diagram: `
          <svg viewBox="0 0 540 125" class="w-full max-w-lg h-auto">
            <rect x="20" y="25" width="500" height="75" rx="14" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
            <text x="270" y="58" fill="#fbbf24" font-family="JetBrains Mono" font-size="15" font-weight="bold" text-anchor="middle">[ x**2   for x in range(6)   if x % 2 == 0 ]</text>
            <text x="115" y="82" fill="#34d399" font-size="11" text-anchor="middle">1. Output Expr</text>
            <text x="265" y="82" fill="#38bdf8" font-size="11" text-anchor="middle">2. Loop Source</text>
            <text x="425" y="82" fill="#f472b6" font-size="11" text-anchor="middle">3. Filter Guard</text>
          </svg>`,
        theory: `
          <p>Comprehensions execute in C-speed inside the Python interpreter, making them both faster and cleaner than manually calling <code>.append()</code> inside a <code>for</code> loop.</p>
        `,
        code: `evens_squared = [x**2 for x in range(10) if x % 2 == 0]
print(evens_squared)  # [0, 4, 16, 36, 64]`
      },
      {
        id: "3-3",
        title: "Generators & yield (Lazy Memory)",
        caption: "On-Demand Stream vs Full List",
        diagram: `
          <svg viewBox="0 0 540 120" class="w-full max-w-lg h-auto">
            <rect x="25" y="25" width="215" height="65" rx="12" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
            <text x="132" y="52" fill="#fecaca" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">[x for x in range(10**7)]</text>
            <text x="132" y="72" fill="#fca5a5" font-size="11" text-anchor="middle">~85 MB RAM at once!</text>
            <rect x="295" y="25" width="220" height="65" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <text x="405" y="52" fill="#a7f3d0" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">(x for x in range(10**7))</text>
            <text x="405" y="72" fill="#6ee7b7" font-size="11" text-anchor="middle">~200 Bytes RAM (Lazy!)</text>
          </svg>`,
        theory: `
          <p>Replacing square brackets <code>[...]</code> with parentheses <code>(...)</code> creates a <strong>Generator Expression</strong> that produces one item at a time using <code>next()</code>, pausing its stack frame between yields.</p>
        `,
        code: `def countdown(n):
    while n > 0:
        yield n
        n -= 1

print(list(countdown(4)))  # [4, 3, 2, 1]`
      }
    ],
    challenges: [
      {
        level: "Beginner",
        title: "Squares of Odd Numbers",
        prompt: "Use a list comprehension to produce squares of all odd numbers from 1 to 15.",
        starterCode: "odd_squares = # write list comprehension\nprint(odd_squares)",
        expectedHint: "[x**2 for x in range(1, 16) if x % 2 != 0]",
        solutionCheck: (code) => code.includes("[") && code.includes("for") && code.includes("%")
      },
      {
        level: "Intermediate",
        title: "Merge Two Lists into Dict",
        prompt: "Combine keys = ['name', 'rank'] and vals = ['Bhavagnya', 'Gold'] into a dict using zip().",
        starterCode: "keys = ['name', 'rank']\nvals = ['Bhavagnya', 'Gold']\nprofile = # use dict(zip(...))\nprint(profile)",
        expectedHint: "profile = dict(zip(keys, vals))",
        solutionCheck: (code) => code.includes("zip")
      },
      {
        level: "Boss Challenge",
        title: "Infinite Fibonacci Generator",
        prompt: "Write a generator function `fib()` using `yield` that produces Fibonacci numbers lazily.",
        starterCode: "def fib():\n    a, b = 0, 1\n    # yield infinitely\n",
        expectedHint: "while True: yield a; a, b = b, a + b",
        solutionCheck: (code) => code.includes("yield")
      }
    ],
    interviewQuestions: [
      {
        q: "What is the difference between an Iterable, an Iterator, and a Generator?",
        a: "An **Iterable** implements `__iter__()` (e.g., `list`, `str`). An **Iterator** implements both `__iter__()` and `__next__()` to track traversal state. A **Generator** is a special iterator created with `yield` or `(x for x in ...)` that automatically implements the iterator protocol with minimal memory overhead.",
        code: "gen = (x * 2 for x in range(3))\nprint(next(gen))  # 0\nprint(next(gen))  # 2"
      },
      {
        q: "How does the `for ... else` construct work in Python?",
        a: "The `else` block after a `for` or `while` loop executes **only if the loop finished normally without hitting a `break` statement**—ideal for search algorithms.",
        code: "for num in [2, 4, 6]:\n    if num % 2 != 0:\n        break\nelse:\n    print('All numbers are even!')"
      },
      {
        q: "Why are List Comprehensions faster than standard `for` loops with `.append()`?",
        a: "List comprehensions avoid repeated Python attribute lookups (`lst.append`) and method-call overhead on every iteration by executing a dedicated `LIST_APPEND` bytecode instruction directly inside CPython.",
        code: "res = [i * 2 for i in range(1000)]"
      }
    ]
  },
  {
    id: 4,
    title: "Data Structures & Big-O",
    subtitle: "Lists, Tuples, Sets, Dictionaries & Hash Table Internals",
    lessons: [
      {
        id: "4-1",
        title: "Dictionaries & Hash Tables (O(1) Lookup)",
        caption: "Hash Bucket Mapping",
        diagram: `
          <svg viewBox="0 0 540 145" class="w-full max-w-lg h-auto">
            <rect x="25" y="45" width="135" height="50" rx="10" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
            <text x="92" y="75" fill="#fff" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">"Bhavagnya"</text>
            <path d="M165 70 L225 70" stroke="#fbbf24" stroke-width="2.5"/>
            <rect x="230" y="45" width="95" height="50" rx="10" fill="#b45309"/>
            <text x="277" y="75" fill="#fff" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">hash(key)</text>
            <path d="M330 70 L385 70" stroke="#34d399" stroke-width="2.5"/>
            <rect x="390" y="25" width="125" height="90" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <text x="452" y="55" fill="#6ee7b7" font-family="JetBrains Mono" font-size="11" text-anchor="middle">Slot [0x04]</text>
            <text x="452" y="82" fill="#fff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">O(1) Instant!</text>
          </svg>`,
        theory: `
          <p>Python dictionaries use open-addressed <strong>hash tables</strong> under the hood. Looking up <code>key in my_dict</code> takes <strong>O(1) constant time</strong> regardless of whether the dictionary has 10 items or 10 million items!</p>
          <p>Since Python 3.7+, dictionaries also preserve <strong>insertion order</strong> by default.</p>
        `,
        code: `ranks = {"Bhavagnya": "Gold", "Aarav": "Silver"}
print(ranks.get("Bhavagnya", "Starter"))  # Gold`
      },
      {
        id: "4-2",
        title: "Lists vs Tuples vs Sets",
        caption: "Container Comparison Matrix",
        diagram: `
          <svg viewBox="0 0 540 140" class="w-full max-w-lg h-auto">
            <rect x="20" y="20" width="155" height="100" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <text x="97" y="48" fill="#38bdf8" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">list [ ]</text>
            <text x="97" y="72" fill="#cbd5e1" font-size="11" text-anchor="middle">Ordered, Mutable</text>
            <text x="97" y="92" fill="#94a3b8" font-size="10" text-anchor="middle">O(n) search</text>
            <rect x="192" y="20" width="155" height="100" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
            <text x="270" y="48" fill="#fbbf24" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">tuple ( )</text>
            <text x="270" y="72" fill="#cbd5e1" font-size="11" text-anchor="middle">Ordered, Immutable</text>
            <text x="270" y="92" fill="#94a3b8" font-size="10" text-anchor="middle">Hashable, Low RAM</text>
            <rect x="365" y="20" width="155" height="100" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
            <text x="442" y="48" fill="#34d399" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">set { }</text>
            <text x="442" y="72" fill="#cbd5e1" font-size="11" text-anchor="middle">Unique Elements</text>
            <text x="442" y="92" fill="#6ee7b7" font-size="10" text-anchor="middle">O(1) membership!</text>
          </svg>`,
        theory: `
          <p>Use a <strong>tuple</strong> for fixed records (coordinates, RGB colors, dict keys) because tuples use less memory and cannot be accidentally mutated. Use a <strong>set</strong> whenever you need deduplication or fast <code>x in seen</code> membership checks.</p>
        `,
        code: `tags = ["python", "ai", "python", "gold"]
unique_tags = set(tags)
print("ai" in unique_tags)  # True in O(1) time`
      }
    ],
    challenges: [
      {
        level: "Beginner",
        title: "Deduplicate While Preserving Order",
        prompt: "Remove duplicates from nums = [3, 1, 3, 2, 1] while keeping original order.",
        starterCode: "nums = [3, 1, 3, 2, 1]\nunique = # use dict.fromkeys(nums)\nprint(unique)",
        expectedHint: "list(dict.fromkeys(nums)) preserves insertion order!",
        solutionCheck: (code) => code.includes("fromkeys") || code.includes("set")
      },
      {
        level: "Boss Challenge",
        title: "Two-Sum in O(n) Time",
        prompt: "Given nums = [2, 7, 11, 15] and target = 9, find the two indices using a hash map (dict).",
        starterCode: "nums = [2, 7, 11, 15]\ntarget = 9\nseen = {}\n# find indices in one pass\n",
        expectedHint: "Check if (target - num) in seen, else store seen[num] = idx",
        solutionCheck: (code) => code.includes("seen") && code.includes("target")
      }
    ],
    interviewQuestions: [
      {
        q: "Why can a `tuple` be a dictionary key, while a `list` cannot?",
        a: "Dictionary keys must be **hashable** (implement `__hash__()` and `__eq__()`), meaning their hash value never changes during their lifetime. Lists are mutable and unhashable (`TypeError: unhashable type: 'list'`), whereas tuples of immutable items have a fixed hash.",
        code: "coords = {(17.38, 78.48): 'Hyderabad'}\nprint(coords[(17.38, 78.48)])"
      },
      {
        q: "What is the difference between Shallow Copy (`copy.copy`) and Deep Copy (`copy.deepcopy`)?",
        a: "A **shallow copy** creates a new outer container but inserts references to the *same nested inner objects*. A **deep copy** recursively clones every nested object so mutating inner lists never affects the original.",
        code: "import copy\na = [[1, 2], [3, 4]]\nb = copy.deepcopy(a)\nb[0].append(99)\nprint(a[0])  # [1, 2] untouched!"
      }
    ]
  },
  {
    id: 5,
    title: "Functions, Closures & Decorators",
    subtitle: "*args, **kwargs, First-Class Functions & @decorator Wrappers",
    lessons: [
      {
        id: "5-1",
        title: "*args, **kwargs & Default Trap",
        caption: "Flexible Argument Packing",
        diagram: `
          <svg viewBox="0 0 540 130" class="w-full max-w-lg h-auto">
            <rect x="25" y="25" width="490" height="80" rx="14" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
            <text x="270" y="55" fill="#e0e7ff" font-family="JetBrains Mono" font-size="14" font-weight="bold" text-anchor="middle">def quest(user, *args, **kwargs):</text>
            <text x="155" y="84" fill="#38bdf8" font-family="JetBrains Mono" font-size="12" text-anchor="middle">*args → tuple</text>
            <text x="385" y="84" fill="#fbbf24" font-family="JetBrains Mono" font-size="12" text-anchor="middle">**kwargs → dict</text>
          </svg>`,
        theory: `
          <p><code>*args</code> collects extra positional arguments into a <strong>tuple</strong>, while <code>**kwargs</code> collects extra keyword arguments into a <strong>dictionary</strong>.</p>
          <p><strong>Golden Rule:</strong> Never use a mutable list or dict as a default parameter (e.g., <code>def add(x, items=[]):</code>)—use <code>items=None</code> instead!</p>
        `,
        code: `def log_badges(student, *badges, **meta):
    print(student, badges, meta)

log_badges("Bhavagnya", "Bronze", "Silver", "Gold", tier=3)`
      },
      {
        id: "5-2",
        title: "Decorators (@wrapper) Explained",
        caption: "Function Wrapping Pipeline",
        diagram: `
          <svg viewBox="0 0 540 135" class="w-full max-w-lg h-auto">
            <rect x="40" y="18" width="460" height="98" rx="16" fill="#312e81" stroke="#fbbf24" stroke-width="2"/>
            <text x="270" y="42" fill="#fbbf24" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">@timer_decorator (Pre & Post Logic)</text>
            <rect x="120" y="54" width="300" height="48" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
            <text x="270" y="83" fill="#fff" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">Original Function: solve_quest()</text>
          </svg>`,
        theory: `
          <p>Because functions in Python are <strong>first-class objects</strong>, a decorator is simply a function that takes another function, wraps it with extra behavior (logging, timing, auth), and returns the enhanced function.</p>
        `,
        code: `from functools import wraps

def hype(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        print("🔥 Running quest...")
        return fn(*args, **kwargs)
    return wrapper`
      }
    ],
    challenges: [
      {
        level: "Intermediate",
        title: "Fix Mutable Default Argument Bug",
        prompt: "Rewrite `def add_skill(skill, skills=[]):` safely using `None`.",
        starterCode: "def add_skill(skill, skills=None):\n    # safely initialize list\n    pass",
        expectedHint: "if skills is None: skills = []",
        solutionCheck: (code) => code.includes("None") && code.includes("[]")
      },
      {
        level: "Boss Challenge",
        title: "Uppercase Return Decorator",
        prompt: "Write a decorator `@shout` that converts the string return value of a function to `.upper()`.",
        starterCode: "def shout(fn):\n    def wrapper(*args, **kwargs):\n        # return fn(...).upper()\n        pass\n    return wrapper",
        expectedHint: "return fn(*args, **kwargs).upper()",
        solutionCheck: (code) => code.includes("upper()") && code.includes("wrapper")
      }
    ],
    interviewQuestions: [
      {
        q: "Why is `def func(items=[]):` considered a classic Python pitfall?",
        a: "Default argument values in Python are evaluated **only once at function definition time**, not on each function call. Therefore, the same list object is shared and mutated across every subsequent invocation. Always use `items=None`.",
        code: "def append_safe(val, items=None):\n    if items is None:\n        items = []\n    items.append(val)\n    return items"
      },
      {
        q: "What does `@functools.wraps(func)` do inside a decorator?",
        a: "`@wraps(func)` copies the original function's metadata (`__name__`, `__doc__`, `__annotations__`) onto the wrapper function so debugging, help docs, and introspection tools see the true function identity.",
        code: "from functools import wraps"
      }
    ]
  },
  {
    id: 6,
    title: "OOP, Dunder Methods & Architecture",
    subtitle: "Classes, Inheritance, MRO, @dataclass & Special Methods",
    lessons: [
      {
        id: "6-1",
        title: "Classes, self & Dunder Methods",
        caption: "Class Blueprint → Object Instance",
        diagram: `
          <svg viewBox="0 0 540 140" class="w-full max-w-lg h-auto">
            <rect x="25" y="25" width="190" height="90" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
            <text x="120" y="52" fill="#a5b4fc" font-family="JetBrains Mono" font-size="12" font-weight="bold" text-anchor="middle">class PyLearner:</text>
            <text x="120" y="75" fill="#e0e7ff" font-family="JetBrains Mono" font-size="11" text-anchor="middle">__init__, rank_up()</text>
            <path d="M220 70 L300 70" stroke="#fbbf24" stroke-width="3"/>
            <polygon points="300,70 290,64 290,76" fill="#fbbf24"/>
            <rect x="305" y="25" width="210" height="90" rx="12" fill="#064e3b" stroke="#fbbf24" stroke-width="2.5"/>
            <text x="410" y="55" fill="#fde047" font-family="JetBrains Mono" font-size="13" font-weight="bold" text-anchor="middle">Bhavagnya Instance</text>
            <text x="410" y="80" fill="#a7f3d0" font-family="JetBrains Mono" font-size="11" text-anchor="middle">tier = "Gold Master"</text>
          </svg>`,
        theory: `
          <p>A <code>class</code> is the blueprint, and <code>self</code> refers to the specific object instance being created or modified. Implementing dunder (double-underscore) methods like <code>__repr__</code> and <code>__len__</code> lets your custom classes integrate seamlessly with Python's built-in functions.</p>
        `,
        code: `class PyLearner:
    def __init__(self, name, chapters=0):
        self.name = name
        self.chapters = chapters

    def __repr__(self):
        return f"PyLearner(name={self.name!r}, chapters={self.chapters})"

p = PyLearner("Bhavagnya", 6)
print(p)`
      }
    ],
    challenges: [
      {
        level: "Intermediate",
        title: "Build a @dataclass Badge",
        prompt: "Create a `@dataclass` named `Badge` with fields `title: str` and `points: int`.",
        starterCode: "from dataclasses import dataclass\n\n# Define Badge dataclass\n",
        expectedHint: "@dataclass class Badge: title: str; points: int",
        solutionCheck: (code) => code.includes("dataclass") && code.includes("Badge")
      }
    ],
    interviewQuestions: [
      {
        q: "What is MRO (Method Resolution Order) in Python multiple inheritance?",
        a: "Python uses the **C3 Linearization algorithm** to compute a deterministic, monotonic search order (`ClassName.mro()`) across inheritance hierarchies so base classes are searched left-to-right and diamond inheritance never visits a parent twice before its children.",
        code: "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint(D.mro())"
      },
      {
        q: "What is the difference between `@staticmethod` and `@classmethod`?",
        a: "`@classmethod` receives the class (`cls`) as its first implicit argument and can access/modify class state or act as an alternative constructor. `@staticmethod` receives neither `self` nor `cls` and behaves like a regular utility function namespaced inside the class.",
        code: "class User:\n    @classmethod\n    def from_string(cls, raw):\n        return cls(raw.strip())"
      }
    ]
  }
];

// =============================================================================
// APPLICATION STATE & LOCALSTORAGE PERSISTENCE
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
  voicePersona: localStorage.getItem('pyb_voice_persona') || 'Sulafat',
  appIconTheme: localStorage.getItem('pyb_app_icon_theme') || 'royal',
  shortcutName: localStorage.getItem('pyb_shortcut_name') || 'pyB',
  customAppIconDataUrl: localStorage.getItem('pyb_custom_app_icon') || ''
};

PYQUEST_CHAPTERS.forEach(ch => {
  state.visibleChallengesCount[ch.id] = Math.min(2, ch.challenges.length);
});

// =============================================================================
// BHAVAGNYA PROFILE AVATAR & BRONZE/SILVER/GOLD TIER FRAMES
// =============================================================================
function processAvatarFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    state.avatarDataUrl = dataUrl;
    try {
      localStorage.setItem('pyquest_avatar_bhavagnya', dataUrl);
    } catch (err) {}
    updateAvatarUI();
    if (state.appIconTheme === 'avatar' || state.appIconTheme === 'rank') {
      updateDynamicAppIcon();
    }
  };
  reader.readAsDataURL(file);
}

function handleAvatarUpload(event) {
  processAvatarFile(event.target.files?.[0]);
}

function handleAvatarDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('avatarDropZone').classList.add('drop-active');
}

function handleAvatarDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('avatarDropZone').classList.remove('drop-active');
}

function handleAvatarDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('avatarDropZone').classList.remove('drop-active');
  processAvatarFile(event.dataTransfer?.files?.[0]);
}

function getTierInfo(completedCount) {
  if (completedCount >= 5) {
    return {
      tier: 'gold',
      label: 'Gold Master',
      icon: 'fa-crown',
      frameClass: 'avatar-frame-gold',
      badgeClass: 'bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 text-amber-950 border-amber-400 shadow-sm',
      showSparkles: true
    };
  } else if (completedCount >= 3) {
    return {
      tier: 'silver',
      label: 'Silver Pythonista',
      icon: 'fa-shield-halved',
      frameClass: 'avatar-frame-silver',
      badgeClass: 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border-slate-400 shadow-xs',
      showSparkles: false
    };
  } else if (completedCount >= 1) {
    return {
      tier: 'bronze',
      label: 'Bronze Coder',
      icon: 'fa-medal',
      frameClass: 'avatar-frame-bronze',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-400',
      showSparkles: false
    };
  }
  return {
    tier: 'starter',
    label: 'Starter Explorer',
    icon: 'fa-rocket',
    frameClass: 'avatar-frame-starter',
    badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    showSparkles: false
  };
}

function updateAvatarUI() {
  const count = state.completedChapters.length;
  const total = PYQUEST_CHAPTERS.length;
  const pct = Math.round((count / total) * 100);
  const tierInfo = getTierInfo(count);

  if (state.avatarDataUrl) {
    const userImg = document.getElementById('userAvatarImg');
    const celebImg = document.getElementById('celebrationAvatarImg');
    if (userImg) userImg.src = state.avatarDataUrl;
    if (celebImg) celebImg.src = state.avatarDataUrl;
  }

  const frameEl = document.getElementById('avatarOuterFrame');
  if (frameEl) {
    frameEl.className = `${tierInfo.frameClass} p-[3.5px] sm:p-1 rounded-full transition-all duration-500`;
  }

  const badgeEl = document.getElementById('tierBadge');
  if (badgeEl) {
    badgeEl.className = `inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border transition-all ${tierInfo.badgeClass}`;
    badgeEl.innerHTML = `<i class="fa-solid ${tierInfo.icon} text-[10px]"></i> ${tierInfo.label}`;
  }

  document.getElementById('tierCrownIcon')?.classList.toggle('hidden', tierInfo.tier !== 'gold');
  document.getElementById('goldSparkles')?.classList.toggle('hidden', !tierInfo.showSparkles);

  const headerCompleted = document.getElementById('headerCompletedCount');
  const headerTotal = document.getElementById('headerTotalChapters');
  const headerBar = document.getElementById('headerProgressBar');
  if (headerCompleted) headerCompleted.textContent = count;
  if (headerTotal) headerTotal.textContent = total;
  if (headerBar) headerBar.style.width = `${pct}%`;

  const mobileCompleted = document.getElementById('mobileCompletedCount');
  const mobileBar = document.getElementById('mobileProgressBar');
  if (mobileCompleted) mobileCompleted.textContent = `${count}/${total}`;
  if (mobileBar) mobileBar.style.width = `${pct}%`;

  document.getElementById('milestoneBronze')?.classList.toggle('ring-2', count >= 1);
  document.getElementById('milestoneBronze')?.classList.toggle('ring-amber-400', count >= 1);
  document.getElementById('milestoneSilver')?.classList.toggle('ring-2', count >= 3);
  document.getElementById('milestoneSilver')?.classList.toggle('ring-slate-200', count >= 3);
  document.getElementById('milestoneGold')?.classList.toggle('ring-2', count >= 5);
  document.getElementById('milestoneGold')?.classList.toggle('ring-yellow-300', count >= 5);
}

function toggleChapterComplete() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const prevTier = getTierInfo(state.completedChapters.length).tier;

  const idx = state.completedChapters.indexOf(chapter.id);
  if (idx === -1) {
    state.completedChapters.push(chapter.id);
  } else {
    state.completedChapters.splice(idx, 1);
  }

  localStorage.setItem('pyquest_completed_bhavagnya', JSON.stringify(state.completedChapters));
  updateAvatarUI();
  updateDynamicAppIcon();
  renderChapterTabs();
  renderActiveChapter();

  const newTierInfo = getTierInfo(state.completedChapters.length);
  if (idx === -1 && newTierInfo.tier !== prevTier) {
    triggerRankCelebration(newTierInfo);
  }
}

function triggerRankCelebration(tierInfo) {
  const modal = document.getElementById('rankCelebrationModal');
  const preview = document.getElementById('celebrationFramePreview');
  preview.className = `w-24 h-24 mx-auto rounded-full p-1.5 ${tierInfo.frameClass}`;
  document.getElementById('celebrationRankTag').textContent = `${tierInfo.label} Unlocked!`;
  document.getElementById('celebrationHeading').textContent = `Hyped Rank Up, Bhavagnya!`;
  document.getElementById('celebrationSubtext').textContent = `You completed ${state.completedChapters.length} chapter(s) and upgraded your avatar aura to ${tierInfo.label}!`;
  modal.classList.remove('hidden');
}

function simulateTierDemo() {
  const tiers = [
    { label: 'Bronze Coder', frameClass: 'avatar-frame-bronze' },
    { label: 'Silver Pythonista', frameClass: 'avatar-frame-silver' },
    { label: 'Gold Master', frameClass: 'avatar-frame-gold' }
  ];
  const pick = tiers[(state.completedChapters.length) % tiers.length];
  triggerRankCelebration(pick);
}

// =============================================================================
// CHAPTER TABS, MOBILE LESSON PALETTE, CHALLENGES & INTERVIEW RENDERERS
// =============================================================================
function renderChapterTabs() {
  const container = document.getElementById('chapterTabsContainer');
  if (!container) return;
  container.innerHTML = PYQUEST_CHAPTERS.map((ch, idx) => {
    const isActive = idx === state.activeChapterIdx;
    const isDone = state.completedChapters.includes(ch.id);
    return `
      <button onclick="selectChapter(${idx})"
              class="lesson-pill px-4 py-2.5 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40'
              }">
        <span class="w-6 h-6 rounded-lg text-xs font-extrabold flex items-center justify-center ${
          isDone
            ? 'bg-emerald-500 text-white'
            : isActive
              ? 'bg-white/20 text-white'
              : 'bg-slate-100 text-slate-700'
        }">
          ${isDone ? '<i class="fa-solid fa-check"></i>' : ch.id}
        </span>
        <div>
          <div class="text-xs font-extrabold whitespace-nowrap">Ch ${ch.id}: ${ch.title}</div>
          <div class="text-[10px] ${isActive ? 'text-indigo-100' : 'text-slate-400'}">${ch.lessons.length} Lessons • ${ch.interviewQuestions.length} Interview Qs</div>
        </div>
      </button>
    `;
  }).join('');
}

function selectChapter(idx) {
  state.activeChapterIdx = idx;
  state.activeLessonIdx = 0;
  renderChapterTabs();
  renderActiveChapter();
}

function scrollLessonPalette(delta) {
  const palette = document.getElementById('lessonPalette');
  if (palette) palette.scrollBy({ left: delta, behavior: 'smooth' });
}

function selectLesson(lessonIdx) {
  state.activeLessonIdx = lessonIdx;
  renderLessonPalette();
  renderActiveLesson();
}

function navigateLesson(dir) {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const nextIdx = state.activeLessonIdx + dir;
  if (nextIdx >= 0 && nextIdx < chapter.lessons.length) {
    selectLesson(nextIdx);
  }
}

function renderLessonPalette() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const palette = document.getElementById('lessonPalette');
  const counter = document.getElementById('lessonCounterPill');
  if (counter) {
    counter.textContent = `Lesson ${state.activeLessonIdx + 1} of ${chapter.lessons.length}`;
  }
  if (!palette) return;
  palette.innerHTML = chapter.lessons.map((lesson, idx) => {
    const isActive = idx === state.activeLessonIdx;
    return `
      <button onclick="selectLesson(${idx})"
              id="lessonPill-${idx}"
              class="lesson-pill px-3.5 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-indigo-50 hover:border-indigo-300'
              }">
        <span class="w-5 h-5 rounded-md text-[10px] font-extrabold flex items-center justify-center ${
          isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
        }">${idx + 1}</span>
        <span class="whitespace-nowrap">${lesson.title}</span>
      </button>
    `;
  }).join('');

  const activePill = document.getElementById(`lessonPill-${state.activeLessonIdx}`);
  activePill?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function renderActiveLesson() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const lesson = chapter.lessons[state.activeLessonIdx] || chapter.lessons[0];

  document.getElementById('lessonTag').textContent = `Lesson ${state.activeLessonIdx + 1} of ${chapter.lessons.length}`;
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('diagramCaptionBadge').textContent = lesson.caption || 'Mental Model';
  document.getElementById('lessonVisualDiagram').innerHTML = lesson.diagram;
  document.getElementById('lessonTheoryContent').innerHTML = lesson.theory;
  document.getElementById('lessonCodeBlock').textContent = lesson.code;

  const prevBtn = document.getElementById('prevLessonBtn');
  const nextBtn = document.getElementById('nextLessonBtn');
  if (prevBtn) prevBtn.disabled = state.activeLessonIdx === 0;
  if (nextBtn) nextBtn.disabled = state.activeLessonIdx >= chapter.lessons.length - 1;
}

function copyExampleCode() {
  const code = document.getElementById('lessonCodeBlock')?.textContent || '';
  const temp = document.createElement('textarea');
  temp.value = code;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
}

function switchSubTab(tabName) {
  state.activeSubTab = tabName;
  ['theory', 'practice', 'interview'].forEach(name => {
    const panel = document.getElementById(`subTab-${name}`);
    const btn = document.getElementById(`tabBtn-${name}`);
    if (panel) panel.classList.toggle('hidden', name !== tabName);
    if (btn) {
      if (name === tabName) {
        btn.className = 'subtab-btn px-3.5 py-2.5 text-xs sm:text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 whitespace-nowrap flex items-center gap-1.5';
      } else {
        btn.className = 'subtab-btn px-3.5 py-2.5 text-xs sm:text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 whitespace-nowrap flex items-center gap-1.5';
      }
    }
  });
}

function renderChallenges() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const visibleCount = state.visibleChallengesCount[chapter.id] || Math.min(2, chapter.challenges.length);
  const shown = chapter.challenges.slice(0, visibleCount);

  const badge = document.getElementById('challengeCounterBadge');
  if (badge) badge.textContent = `Showing ${shown.length} of ${chapter.challenges.length} Challenges`;

  const container = document.getElementById('challengesContainer');
  if (container) {
    container.innerHTML = shown.map((ch, idx) => `
      <div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${
              ch.level === 'Boss Challenge'
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : ch.level === 'Intermediate'
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-emerald-100 text-emerald-800'
            }">${ch.level}</span>
            <h4 class="font-extrabold text-sm sm:text-base text-slate-900">${ch.title}</h4>
          </div>
          <button onclick="toggleChallengeHint(${idx})" class="text-xs font-bold text-indigo-600 hover:underline">
            <i class="fa-regular fa-lightbulb mr-1"></i>Hint
          </button>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${ch.prompt}</p>
        <div id="challengeHint-${idx}" class="hidden text-xs font-mono bg-amber-50 border border-amber-200 text-amber-900 p-2.5 rounded-xl">
          💡 ${ch.expectedHint}
        </div>
        <textarea id="challengeCode-${idx}" rows="4"
                  class="w-full rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs sm:text-sm p-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">${ch.starterCode}</textarea>
        <div class="flex items-center justify-between gap-2">
          <button onclick="checkChallengeSolution(${idx})"
                  class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition">
            <i class="fa-solid fa-play mr-1"></i>Verify Solution
          </button>
          <span id="challengeFeedback-${idx}" class="text-xs font-bold"></span>
        </div>
      </div>
    `).join('');
  }

  const loadMoreBtn = document.getElementById('loadMoreChallengesBtn');
  const loadMoreText = document.getElementById('loadMoreBtnText');
  if (loadMoreBtn && loadMoreText) {
    if (visibleCount >= chapter.challenges.length) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
      loadMoreText.textContent = 'All Chapter Challenges Unlocked!';
    } else {
      loadMoreBtn.disabled = false;
      loadMoreBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      const remaining = chapter.challenges.length - visibleCount;
      loadMoreText.textContent = `Load More Challenges (+${Math.min(2, remaining)} Extra Exercises)`;
    }
  }
}

function loadMoreChallenges() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const current = state.visibleChallengesCount[chapter.id] || 2;
  state.visibleChallengesCount[chapter.id] = Math.min(chapter.challenges.length, current + 2);
  renderChallenges();
}

function toggleChallengeHint(idx) {
  document.getElementById(`challengeHint-${idx}`)?.classList.toggle('hidden');
}

function checkChallengeSolution(idx) {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const challenge = chapter.challenges[idx];
  const userCode = document.getElementById(`challengeCode-${idx}`)?.value || '';
  const fb = document.getElementById(`challengeFeedback-${idx}`);
  if (!fb) return;

  if (challenge.solutionCheck(userCode)) {
    fb.textContent = '✅ Spot on, Bhavagnya! Clean Pythonic solution.';
    fb.className = 'text-xs font-extrabold text-emerald-600';
  } else {
    fb.textContent = '⚠️ Almost there — tap Hint above for a quick nudge!';
    fb.className = 'text-xs font-bold text-amber-600';
  }
}

function renderInterviewQuestions() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const qs = chapter.interviewQuestions;
  document.getElementById('interviewChapterName').textContent = `Ch ${chapter.id}: ${chapter.title}`;
  document.getElementById('interviewCountBadge').textContent = qs.length;
  document.getElementById('interviewTotalCount').textContent = qs.length;

  const masteredInChapter = qs.filter((_, i) => state.masteredInterviews.includes(`${chapter.id}-${i}`)).length;
  document.getElementById('interviewMasteredCount').textContent = masteredInChapter;

  const listEl = document.getElementById('interviewQuestionsList');
  if (!listEl) return;

  listEl.innerHTML = qs.map((item, idx) => {
    const key = `${chapter.id}-${idx}`;
    const isMastered = state.masteredInterviews.includes(key);
    const formattedAnswer = item.a
      .replace(/`([^`]+)`/g, '<code class="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-mono text-xs">$1</code>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return `
      <div class="rounded-2xl border ${isMastered ? 'border-emerald-300 bg-emerald-50/30' : 'border-slate-200 bg-white'} overflow-hidden shadow-2xs">
        <button onclick="toggleInterviewAnswer(${idx})"
                class="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-slate-50/80 transition">
          <div class="flex items-start gap-2.5">
            <span class="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">Q${idx + 1}</span>
            <span class="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">${item.q}</span>
          </div>
          <i id="interviewChevron-${idx}" class="fa-solid fa-chevron-down text-slate-400 text-xs mt-1.5 transition-transform"></i>
        </button>
        <div id="interviewBody-${idx}" class="hidden px-4 pb-4 pt-1 border-t border-slate-100 space-y-3">
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${formattedAnswer}</p>
          <pre class="p-3 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto">${item.code}</pre>
          <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
            <button onclick="toggleMasteredInterview(${idx})"
                    class="px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                      isMastered
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-emerald-50'
                    }">
              <i class="fa-solid fa-check mr-1"></i>${isMastered ? 'Mastered' : 'Mark Mastered'}
            </button>
            <button onclick="askInterviewDoubt(${idx})"
                    class="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition">
              <i class="fa-solid fa-microphone mr-1"></i>Practice Follow-Up with AI
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleInterviewAnswer(idx) {
  const body = document.getElementById(`interviewBody-${idx}`);
  const chev = document.getElementById(`interviewChevron-${idx}`);
  if (body) body.classList.toggle('hidden');
  if (chev) chev.classList.toggle('rotate-180');
}

function toggleMasteredInterview(idx) {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const key = `${chapter.id}-${idx}`;
  const pos = state.masteredInterviews.indexOf(key);
  if (pos === -1) state.masteredInterviews.push(key);
  else state.masteredInterviews.splice(pos, 1);
  localStorage.setItem('pyquest_interviews_bhavagnya', JSON.stringify(state.masteredInterviews));
  renderInterviewQuestions();
}

function renderActiveChapter() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const isDone = state.completedChapters.includes(chapter.id);

  document.getElementById('activeChapterBadge').textContent = `Chapter ${chapter.id}`;
  document.getElementById('activeChapterTitle').textContent = chapter.title;
  document.getElementById('activeChapterSubtitle').textContent = chapter.subtitle;

  const statusTag = document.getElementById('chapterStatusTag');
  const completeBtn = document.getElementById('completeChapterBtn');
  if (statusTag && completeBtn) {
    if (isDone) {
      statusTag.textContent = 'Completed ✓';
      statusTag.className = 'text-xs font-bold px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800';
      completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Chapter Mastered! (Click to Undo)</span>';
      completeBtn.className = 'w-full sm:w-auto px-5 py-3 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center justify-center gap-2 transition active:scale-[0.98]';
    } else {
      statusTag.textContent = 'In Progress';
      statusTag.className = 'text-xs font-semibold px-2.5 py-0.5 rounded-lg bg-slate-200/70 text-slate-700';
      completeBtn.innerHTML = '<i class="fa-solid fa-award"></i> <span>Mark Chapter Complete & Upgrade Rank</span>';
      completeBtn.className = 'w-full sm:w-auto px-5 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-md shadow-indigo-200 flex items-center justify-center gap-2 transition active:scale-[0.98]';
    }
  }

  renderLessonPalette();
  renderActiveLesson();
  renderChallenges();
  renderInterviewQuestions();
}

// =============================================================================
// GEMINI API SETTINGS MODAL & NATURAL SOFT HUMAN VOICE ENGINE
// =============================================================================
let recognition = null;
let isListening = false;
let activeAudioPlayer = null;

function getActiveGeminiKey() {
  return (state.customApiKey || '').trim();
}

function openApiSettingsModal() {
  document.getElementById('customApiKeyInput').value = state.customApiKey || '';
  document.getElementById('voicePersonaSelect').value = state.voicePersona || 'Sulafat';
  document.getElementById('apiKeyTestFeedback').classList.add('hidden');
  document.getElementById('apiSettingsModal').classList.remove('hidden');
}

function closeApiSettingsModal() {
  document.getElementById('apiSettingsModal').classList.add('hidden');
}

function toggleApiKeyVisibility() {
  const inp = document.getElementById('customApiKeyInput');
  const icon = document.getElementById('apiKeyEyeIcon');
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fa-regular fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fa-regular fa-eye';
  }
}

function saveVoicePreference() {
  state.voicePersona = document.getElementById('voicePersonaSelect').value;
  localStorage.setItem('pyb_voice_persona', state.voicePersona);
}

function saveCustomApiKey() {
  const val = document.getElementById('customApiKeyInput').value.trim();
  state.customApiKey = val;
  localStorage.setItem('pyb_custom_gemini_key', val);
  saveVoicePreference();

  const fb = document.getElementById('apiKeyTestFeedback');
  fb.textContent = val
    ? `✅ Gemini API key & ${state.voicePersona} voice saved for Py-B!`
    : `✅ Voice preference (${state.voicePersona}) saved! Add a Gemini API key anytime.`;
  fb.className = 'text-xs font-bold p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200';
  fb.classList.remove('hidden');
}

function clearCustomApiKey() {
  state.customApiKey = '';
  localStorage.removeItem('pyb_custom_gemini_key');
  document.getElementById('customApiKeyInput').value = '';
  const fb = document.getElementById('apiKeyTestFeedback');
  fb.textContent = '🔄 Cleared saved API key.';
  fb.className = 'text-xs font-bold p-2.5 rounded-xl bg-indigo-50 text-indigo-800 border border-indigo-200';
  fb.classList.remove('hidden');
}

async function testGeminiConnection() {
  saveCustomApiKey();
  const btn = document.getElementById('testApiBtn');
  const fb = document.getElementById('apiKeyTestFeedback');
  btn.disabled = true;
  btn.textContent = 'Testing...';
  try {
    await speakText("Hi Bhavagnya! Your Py-B soft human voice and Gemini connection are working smoothly.");
    fb.textContent = `✅ Connected! Playing soft voice (${state.voicePersona}).`;
    fb.className = 'text-xs font-bold p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200';
    fb.classList.remove('hidden');
  } catch (e) {
    fb.textContent = '⚠️ Tested fallback neural voice. Paste a Gemini API key above for cloud TTS.';
    fb.className = 'text-xs font-bold p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200';
    fb.classList.remove('hidden');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Test Voice & Key';
  }
}

function toggleVoiceTutorModal(show) {
  const modal = document.getElementById('voiceTutorModal');
  modal.classList.toggle('hidden', !show);
  if (!show) {
    if (isListening) stopVoiceRecognition();
    stopAllAiAudio();
  }
}

function askLessonDoubt() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const lesson = chapter.lessons[state.activeLessonIdx];
  toggleVoiceTutorModal(true);
  document.getElementById('aiTextInput').value = `Explain "${lesson.title}" from ${chapter.title} in simple terms with an example.`;
  sendAiDoubt();
}

function askInterviewDoubt(qIdx) {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const qObj = chapter.interviewQuestions[qIdx];
  toggleVoiceTutorModal(true);
  document.getElementById('aiTextInput').value = `Quiz me or give a follow-up interview question on: ${qObj.q}`;
  sendAiDoubt();
}

function readLessonAloud() {
  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const lesson = chapter.lessons[state.activeLessonIdx];
  const plainText = document.getElementById('lessonTheoryContent').innerText;
  speakText(`Lesson: ${lesson.title}. ${plainText}`);
}

function stopAllAiAudio() {
  if (activeAudioPlayer) {
    try {
      activeAudioPlayer.pause();
      activeAudioPlayer.currentTime = 0;
    } catch (e) {}
    activeAudioPlayer = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  document.getElementById('stopSpeakingBtn')?.classList.add('hidden');
}

function pcmBase64ToWavBlob(base64Data, sampleRate = 24000) {
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const pcmBytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    pcmBytes[i] = binaryString.charCodeAt(i);
  }
  const wavHeader = new ArrayBuffer(44);
  const view = new DataView(wavHeader);
  const writeStr = (offset, str) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, 'RIFF');
  view.setUint32(4, 36 + pcmBytes.length, true);
  writeStr(8, 'WAVE');
  writeStr(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, 'data');
  view.setUint32(40, pcmBytes.length, true);
  return new Blob([wavHeader, pcmBytes], { type: 'audio/wav' });
}

async function speakText(text) {
  stopAllAiAudio();
  const clean = text
    .replace(/```[\s\S]*?```/g, ' Here is the code example shown on screen. ')
    .replace(/[`*#_]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean) return;

  const stopBtn = document.getElementById('stopSpeakingBtn');
  if (stopBtn) stopBtn.classList.remove('hidden');

  try {
    const apiKey = getActiveGeminiKey();
    if (apiKey) {
      const ttsUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
      const ttsPayload = {
        contents: [{
          parts: [{ text: `Speak in a warm, soft, calm, encouraging human tutor tone: ${clean}` }]
        }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: state.voicePersona || "Sulafat" }
            }
          }
        },
        model: "gemini-2.5-flash-preview-tts"
      };

      const res = await fetch(ttsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ttsPayload)
      });

      if (res.ok) {
        const data = await res.json();
        const part = data?.candidates?.[0]?.content?.parts?.[0];
        const audioData = part?.inlineData?.data;
        const mimeType = part?.inlineData?.mimeType || '';
        if (audioData) {
          const rateMatch = mimeType.match(/rate=(\d+)/);
          const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
          const wavBlob = pcmBase64ToWavBlob(audioData, sampleRate);
          const audioUrl = URL.createObjectURL(wavBlob);
          const audio = new Audio(audioUrl);
          activeAudioPlayer = audio;
          audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
            stopBtn?.classList.add('hidden');
          };
          await audio.play();
          return;
        }
      }
    }
  } catch (err) {}

  if ('speechSynthesis' in window) {
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find(v => /Natural|Aria|Jenny|Ava|Samantha|Google UK English Female/i.test(v.name)) ||
      voices.find(v => /en/i.test(v.lang) && !/Microsoft David|Microsoft Zira/i.test(v.name)) ||
      voices[0];

    const utterance = new SpeechSynthesisUtterance(clean);
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 0.93;
    utterance.pitch = 1.02;
    utterance.onend = () => stopBtn?.classList.add('hidden');
    window.speechSynthesis.speak(utterance);
  }
}

function toggleVoiceRecognition() {
  if (isListening) {
    stopVoiceRecognition();
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    appendAiMessage('AI', "Voice recognition isn't supported in this browser, Bhavagnya—please type your question below!");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    isListening = true;
    document.getElementById('voiceStatusBanner').classList.remove('hidden');
    document.getElementById('voiceLiveTranscript').textContent = "Listening to Bhavagnya... Speak now";
    document.getElementById('micTriggerBtn').classList.add('animate-pulse', 'ring-4', 'ring-rose-300');
  };

  recognition.onresult = (event) => {
    let transcript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    document.getElementById('voiceLiveTranscript').textContent = `"${transcript}"`;
    document.getElementById('aiTextInput').value = transcript;
  };

  recognition.onend = () => {
    const finalQuery = document.getElementById('aiTextInput').value.trim();
    stopVoiceRecognition();
    if (finalQuery) {
      sendAiDoubt();
    }
  };

  recognition.onerror = () => {
    stopVoiceRecognition();
  };

  recognition.start();
}

function stopVoiceRecognition() {
  isListening = false;
  if (recognition) {
    try { recognition.stop(); } catch (e) {}
  }
  document.getElementById('voiceStatusBanner').classList.add('hidden');
  document.getElementById('micTriggerBtn').classList.remove('animate-pulse', 'ring-4', 'ring-rose-300');
}

function appendAiMessage(sender, htmlText) {
  const feed = document.getElementById('aiChatMessages');
  const isUser = sender === 'User';
  const bubble = document.createElement('div');
  bubble.className = `flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`;
  bubble.innerHTML = `
    <div class="w-8 h-8 rounded-xl ${isUser ? 'bg-amber-500 text-slate-950' : 'bg-indigo-600 text-white'} flex items-center justify-center shrink-0 text-[11px] font-extrabold">
      ${isUser ? 'B' : 'Py-B'}
    </div>
    <div class="${isUser ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'} rounded-2xl p-3 text-xs sm:text-sm shadow-xs max-w-[82%] leading-relaxed">
      ${htmlText}
    </div>
  `;
  feed.appendChild(bubble);
  feed.scrollTop = feed.scrollHeight;
}

async function callGeminiWithBackoff(payload, retries = 2) {
  const apiKey = getActiveGeminiKey();
  if (!apiKey) throw new Error('NO_API_KEY');
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, Math.pow(2, attempt) * 1000));
    }
  }
}

async function sendAiDoubt() {
  const inputEl = document.getElementById('aiTextInput');
  const query = inputEl.value.trim();
  if (!query) return;

  inputEl.value = '';
  appendAiMessage('User', query);

  const typingId = 'typing-' + Date.now();
  const feed = document.getElementById('aiChatMessages');
  const typingDiv = document.createElement('div');
  typingDiv.id = typingId;
  typingDiv.className = 'text-xs text-slate-400 italic px-2';
  typingDiv.textContent = 'Py-B AI is thinking for Bhavagnya...';
  feed.appendChild(typingDiv);
  feed.scrollTop = feed.scrollHeight;

  const chapter = PYQUEST_CHAPTERS[state.activeChapterIdx];
  const payload = {
    contents: [{
      parts: [{ text: `Student Name: Bhavagnya. Current Chapter: ${chapter.title}. Question: ${query}` }]
    }],
    systemInstruction: {
      parts: [{
        text: "You are Py-B's warm, encouraging, human-sounding Python tutor speaking directly to Bhavagnya. Give clear, concise, friendly answers (3-5 sentences max) with a tiny Python code example when helpful."
      }]
    }
  };

  try {
    const result = await callGeminiWithBackoff(payload);
    document.getElementById(typingId)?.remove();
    const reply = result?.candidates?.[0]?.content?.parts?.[0]?.text || "Great question, Bhavagnya! Keep experimenting with small code snippets to see how Python objects behave.";
    const formatted = reply
      .replace(/```python([\s\S]*?)```/g, '<pre class="mt-2 p-2.5 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto">$1</pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-indigo-50 text-indigo-700 px-1 rounded font-mono text-xs">$1</code>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    appendAiMessage('AI', formatted);
    if (document.getElementById('autoSpeakToggle').checked) {
      speakText(reply);
    }
  } catch (e) {
    document.getElementById(typingId)?.remove();
    const noKeyMsg = e.message === 'NO_API_KEY'
      ? `Tip, Bhavagnya: Tap the top-left <strong>pyB</strong> logo to paste your Gemini API key for full AI answers! Meanwhile, break the problem into smaller steps and inspect types with <code>type()</code>.`
      : `Here's a quick tip for you, Bhavagnya: break the problem into smaller steps, check variable types with <code>type()</code>, and test edge cases!`;
    appendAiMessage('AI', noKeyMsg);
    if (document.getElementById('autoSpeakToggle').checked) {
      speakText(noKeyMsg.replace(/<[^>]+>/g, ''));
    }
  }
}

// =============================================================================
// IMAGE UPLOAD OVERLAY (CLICK, DRAG-AND-DROP & PASTE) FOR CODE DEBUGGING
// =============================================================================
function openImageOverlayModal() {
  document.getElementById('imageOverlayModal').classList.remove('hidden');
}
function closeImageOverlayModal() {
  document.getElementById('imageOverlayModal').classList.add('hidden');
}

function processCodeScreenshotFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const fullDataUrl = e.target.result;
    document.getElementById('codeImagePreview').src = fullDataUrl;
    document.getElementById('codeImagePreviewWrap').classList.remove('hidden');
    state.uploadedCodeImageBase64 = fullDataUrl.split(',')[1];
  };
  reader.readAsDataURL(file);
}

function handleCodeImageUpload(event) {
  processCodeScreenshotFile(event.target.files?.[0]);
}

function handleCodeDropZoneDragOver(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('codeImageDropZone').classList.add('drop-active');
}

function handleCodeDropZoneDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('codeImageDropZone').classList.remove('drop-active');
}

function handleCodeDropZoneDrop(event) {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('codeImageDropZone').classList.remove('drop-active');
  processCodeScreenshotFile(event.dataTransfer?.files?.[0]);
}

window.addEventListener('paste', (event) => {
  const modal = document.getElementById('imageOverlayModal');
  if (modal && !modal.classList.contains('hidden')) {
    const items = event.clipboardData?.items || [];
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        processCodeScreenshotFile(item.getAsFile());
        break;
      }
    }
  }
});

async function analyzeUploadedCodeImage() {
  if (!state.uploadedCodeImageBase64) return;
  const btn = document.getElementById('analyzeImgBtn');
  const resultBox = document.getElementById('codeImageResult');
  const promptText = document.getElementById('codeImagePrompt').value;

  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1.5"></i> Analyzing Code...';
  resultBox.classList.remove('hidden');
  resultBox.textContent = 'Scanning code screenshot with Gemini Vision...';

  const payload = {
    contents: [{
      role: 'user',
      parts: [
        { text: promptText },
        { inlineData: { mimeType: 'image/png', data: state.uploadedCodeImageBase64 } }
      ]
    }]
  };

  try {
    const data = await callGeminiWithBackoff(payload);
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Code scanned! Check indentation and variable names.';
    resultBox.innerHTML = text.replace(/\n/g, '<br>');
  } catch (err) {
    resultBox.innerHTML = err.message === 'NO_API_KEY'
      ? 'Please tap the top-left <strong>pyB</strong> logo and enter your Gemini API key first to scan code images!'
      : 'Could not reach Gemini Vision right now. Make sure your image is clear and try again!';
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Analyze with Gemini Vision';
  }
}

// =============================================================================
// GOOGLE FORMS BACKEND SUBMISSION
// =============================================================================
function openContactModal() {
  document.getElementById('contactSupportModal').classList.remove('hidden');
}
function closeContactModal() {
  document.getElementById('contactSupportModal').classList.add('hidden');
}

async function submitGoogleSupportForm(event) {
  event.preventDefault();
  const btn = document.getElementById('formSubmitBtn');
  const statusEl = document.getElementById('formSubmitStatus');
  const name = document.getElementById('formStudentName').value;
  const topic = document.getElementById('formTopic').value;
  const message = document.getElementById('formMessage').value;

  btn.disabled = true;
  btn.textContent = 'Sending...';

  const formId = '1FAIpQLSdbHIqr4nTI1AKzI2ZRiSFoS_4dKEuKtLObcWbmi4LR8MYJMQ';
  const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

  const params = new URLSearchParams();
  params.append('entry.2005620554', name);
  params.append('entry.1045781291', topic);
  params.append('entry.839337160', message);
  params.append('fvv', '1');
  params.append('pageHistory', '0');
  params.append('fbzx', '3704502448696650615');
  params.append('submissionTimestamp', '-1');

  try {
    await fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });
    statusEl.textContent = '✅ Doubt submitted! Your mentor will respond shortly (or message 7989686037 on WhatsApp).';
    statusEl.className = 'text-xs font-bold p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200';
    statusEl.classList.remove('hidden');
    document.getElementById('formTopic').value = '';
    document.getElementById('formMessage').value = '';
  } catch (err) {
    statusEl.textContent = '⚠️ Network issue submitting form. Please tap WhatsApp 7989686037 directly!';
    statusEl.className = 'text-xs font-bold p-3 rounded-xl bg-amber-50 text-amber-800 border border-amber-200';
    statusEl.classList.remove('hidden');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Submit Doubt';
  }
}

// =============================================================================
// DYNAMIC HOME-SCREEN APP ICON & MANIFEST GENERATOR
// =============================================================================
let activeManifestBlobUrl = null;
let latestGeneratedIconDataUrl = '';

function openAppIconStudioModal() {
  document.getElementById('shortcutNameInput').value = state.shortcutName || 'pyB';
  highlightSelectedIconThemeBtn();
  updateDynamicAppIcon();
  document.getElementById('appIconStudioModal').classList.remove('hidden');
}

function closeAppIconStudioModal() {
  document.getElementById('appIconStudioModal').classList.add('hidden');
}

function highlightSelectedIconThemeBtn() {
  ['royal', 'rank', 'cyber', 'avatar'].forEach(t => {
    const btn = document.getElementById(`iconThemeBtn-${t}`);
    if (!btn) return;
    if (state.appIconTheme === t && !state.customAppIconDataUrl) {
      btn.className = 'icon-theme-btn p-2.5 rounded-xl border-2 border-indigo-600 bg-indigo-50 text-left transition';
    } else {
      btn.className = 'icon-theme-btn p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-left transition';
    }
  });
}

function setAppIconTheme(themeName) {
  state.appIconTheme = themeName;
  state.customAppIconDataUrl = '';
  localStorage.setItem('pyb_app_icon_theme', themeName);
  localStorage.removeItem('pyb_custom_app_icon');
  highlightSelectedIconThemeBtn();
  updateDynamicAppIcon();
}

function handleCustomAppIconUpload(event) {
  const file = event.target.files?.[0];
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    state.customAppIconDataUrl = e.target.result;
    try {
      localStorage.setItem('pyb_custom_app_icon', state.customAppIconDataUrl);
    } catch (err) {}
    highlightSelectedIconThemeBtn();
    updateDynamicAppIcon();
  };
  reader.readAsDataURL(file);
}

function drawRoundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function applyGeneratedIconToHead(iconDataUrl, shortcutLabel) {
  latestGeneratedIconDataUrl = iconDataUrl;

  const fav = document.getElementById('dynamicFaviconLink');
  const apple = document.getElementById('dynamicAppleTouchIconLink');
  const livePreview = document.getElementById('liveAppIconPreviewImg');
  const miniPreview = document.getElementById('settingsMiniAppIconPreview');
  const labelPreview = document.getElementById('liveAppShortcutLabel');

  if (fav) fav.href = iconDataUrl;
  if (apple) apple.href = iconDataUrl;
  if (livePreview) livePreview.src = iconDataUrl;
  if (miniPreview) miniPreview.src = iconDataUrl;
  if (labelPreview) labelPreview.textContent = shortcutLabel;

  const themeColors = {
    royal: '#1e1b4b',
    cyber: '#022c22',
    rank: '#1e1b4b',
    avatar: '#0f172a'
  };
  const bgHex = themeColors[state.appIconTheme] || '#1e1b4b';
  const metaTheme = document.getElementById('dynamicThemeColorMeta');
  if (metaTheme) metaTheme.setAttribute('content', bgHex);

  const manifestObj = {
    name: `${shortcutLabel} — Bhavagnya's Python Studio`,
    short_name: shortcutLabel,
    description: "Interactive Python Mastery with Natural Gemini Voice & Rank Frames",
    start_url: window.location.href,
    display: "standalone",
    background_color: bgHex,
    theme_color: bgHex,
    icons: [
      { src: iconDataUrl, sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: iconDataUrl, sizes: "512x512", type: "image/png", purpose: "any maskable" }
    ]
  };

  if (activeManifestBlobUrl) {
    URL.revokeObjectURL(activeManifestBlobUrl);
  }
  const manifestBlob = new Blob([JSON.stringify(manifestObj)], { type: 'application/manifest+json' });
  activeManifestBlobUrl = URL.createObjectURL(manifestBlob);
  const manifestLink = document.getElementById('dynamicManifestLink');
  if (manifestLink) manifestLink.href = activeManifestBlobUrl;
}

function updateDynamicAppIcon() {
  const nameInput = document.getElementById('shortcutNameInput');
  const shortcutLabel = (nameInput ? nameInput.value.trim() : state.shortcutName) || 'pyB';
  state.shortcutName = shortcutLabel;
  localStorage.setItem('pyb_shortcut_name', shortcutLabel);

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (state.customAppIconDataUrl) {
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, 512, 512);
      drawRoundRectPath(ctx, 0, 0, 512, 512, 110);
      ctx.clip();
      ctx.drawImage(img, 0, 0, 512, 512);
      applyGeneratedIconToHead(canvas.toDataURL('image/png'), shortcutLabel);
    };
    img.src = state.customAppIconDataUrl;
    return;
  }

  if (state.appIconTheme === 'avatar') {
    const avatarSrc = state.avatarDataUrl || document.getElementById('userAvatarImg')?.src;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      ctx.clearRect(0, 0, 512, 512);
      drawRoundRectPath(ctx, 0, 0, 512, 512, 110);
      ctx.clip();
      ctx.drawImage(img, 0, 0, 512, 512);

      const grad = ctx.createLinearGradient(0, 360, 512, 512);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.88)');
      grad.addColorStop(1, 'rgba(49, 46, 129, 0.95)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 375, 512, 137);

      ctx.font = '800 68px "Plus Jakarta Sans", Inter, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'right';
      ctx.fillText('py', 268, 465);
      ctx.fillStyle = '#fbbf24';
      ctx.textAlign = 'left';
      ctx.fillText('B', 272, 465);

      applyGeneratedIconToHead(canvas.toDataURL('image/png'), shortcutLabel);
    };
    img.onerror = () => {
      state.appIconTheme = 'royal';
      updateDynamicAppIcon();
    };
    img.src = avatarSrc;
    return;
  }

  const tier = getTierInfo(state.completedChapters.length).tier;
  let bg1 = '#0f172a', bg2 = '#312e81', accent = '#fbbf24', bracket = '#38bdf8';

  if (state.appIconTheme === 'cyber') {
    bg1 = '#022c22'; bg2 = '#065f46'; accent = '#34d399'; bracket = '#a7f3d0';
  } else if (state.appIconTheme === 'rank') {
    if (tier === 'gold') {
      bg1 = '#451a03'; bg2 = '#b45309'; accent = '#fde047'; bracket = '#fef08a';
    } else if (tier === 'silver') {
      bg1 = '#1e293b'; bg2 = '#64748b'; accent = '#f8fafc'; bracket = '#cbd5e1';
    } else if (tier === 'bronze') {
      bg1 = '#271307'; bg2 = '#92400e'; accent = '#fdba74'; bracket = '#fed7aa';
    }
  }

  drawRoundRectPath(ctx, 0, 0, 512, 512, 112);
  const bgGrad = ctx.createLinearGradient(0, 0, 512, 512);
  bgGrad.addColorStop(0, bg1);
  bgGrad.addColorStop(1, bg2);
  ctx.fillStyle = bgGrad;
  ctx.fill();

  drawRoundRectPath(ctx, 18, 18, 476, 476, 98);
  ctx.lineWidth = 6;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.stroke();

  ctx.strokeStyle = bracket;
  ctx.lineWidth = 18;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(92, 175);
  ctx.lineTo(54, 256);
  ctx.lineTo(92, 337);
  ctx.stroke();

  ctx.strokeStyle = accent;
  ctx.beginPath();
  ctx.moveTo(420, 175);
  ctx.lineTo(458, 256);
  ctx.lineTo(420, 337);
  ctx.stroke();

  ctx.font = '800 158px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'right';
  ctx.fillText('py', 284, 308);

  ctx.font = '900 176px "Plus Jakarta Sans", Inter, sans-serif';
  ctx.fillStyle = accent;
  ctx.textAlign = 'left';
  ctx.fillText('B', 288, 312);

  ctx.beginPath();
  ctx.arc(395, 132, 16, 0, Math.PI * 2);
  ctx.fillStyle = bracket;
  ctx.fill();

  applyGeneratedIconToHead(canvas.toDataURL('image/png'), shortcutLabel);
}

function downloadGeneratedAppIcon() {
  if (!latestGeneratedIconDataUrl) updateDynamicAppIcon();
  const link = document.createElement('a');
  link.download = `${state.shortcutName || 'pyB'}-app-icon.png`;
  link.href = latestGeneratedIconDataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// INITIALIZE APP ON LOAD
// =============================================================================
window.addEventListener('DOMContentLoaded', () => {
  updateAvatarUI();
  updateDynamicAppIcon();
  renderChapterTabs();
  renderActiveChapter();
});
