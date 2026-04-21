"""openbird CLI — EU Air Passenger Rights Claim Assistant"""

import sys
import os
import shutil
from pathlib import Path

VERSION = "0.1.0"

PACKAGE_ROOT = Path(__file__).parent.parent

SKILLS = [
    ("/analyze-rejection", "Analyze an airline rejection letter — find which legal arguments are wrong and why"),
    ("/file-claim",        "Draft your initial EC 261/2004 claim letter to the airline with correct legal citations"),
    ("/escalate",          "Escalate to AESA (Spain), ECC-Net Germany, or another national enforcement body"),
]


def print_help():
    skills_str = "\n".join(
        f"  {name:<22} {desc}" for name, desc in SKILLS
    )
    print(f"""
openbird v{VERSION} — EU Air Passenger Rights Claim Assistant

Available Claude Code skills:
{skills_str}

Usage:
  openbird install    Copy skills and context to .claude/ in the current directory
  openbird help       Show this message

What it does:
  Gives Claude Code enough legal context to help you fight EC 261/2004 claims.
  Airlines routinely reject valid claims — this repo arms you with the right
  counter-arguments and authority filing guides.

More info:
  https://github.com/buildingopen/openbird
""")


def install_skills():
    cwd = Path.cwd()
    target_dir = cwd / ".claude" / "skills"
    target_dir.mkdir(parents=True, exist_ok=True)
    print(f"Installing to {target_dir}")

    skills_source = PACKAGE_ROOT / "skills"
    if not skills_source.exists():
        print("Error: skills/ directory not found in package. Try reinstalling.", file=sys.stderr)
        sys.exit(1)

    count = 0
    for skill_file in sorted(skills_source.glob("*.md")):
        dest = target_dir / skill_file.name
        shutil.copy2(skill_file, dest)
        print(f"  Copied skills/{skill_file.name}")
        count += 1

    # Copy CLAUDE.md to .claude/
    claude_src = PACKAGE_ROOT / "CLAUDE.md"
    claude_dest = cwd / ".claude" / "openbird-context.md"
    shutil.copy2(claude_src, claude_dest)
    print(f"  Copied CLAUDE.md → .claude/openbird-context.md")

    print(f"""
Done. {count} skills installed.

Start Claude Code in this directory:
  claude

Then use /analyze-rejection, /file-claim, or /escalate.
""")


def main():
    command = sys.argv[1] if len(sys.argv) > 1 else "help"

    if command in ("help", "--help", "-h"):
        print_help()
    elif command == "install":
        install_skills()
    else:
        print(f"Unknown command: {command}", file=sys.stderr)
        print('Run "openbird help" for usage.', file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
