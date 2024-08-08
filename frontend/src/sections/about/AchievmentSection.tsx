const AchievmentSection = () => {
  return (
    <section className="bg-muted padding-x margin-y padding-y">
      <div className="text-center pb-6">
        <h2 className="pb-3 text-3xl font-semibold">Netmifi By The Numbers</h2>
        <p className="text-center text-lg">
          Thousands of students have taken our courses
        </p>
      </div>

      <div className="flex">
        <div className="flex-1">
          <p className="text-lg md:text-xl pb-2 text-destructive font-semibold">
            Student Enrolled
          </p>
          <h2 className="text-2xl md:text-3xl pb-5">50,000+</h2>
          <p className="text-lg md:text-xl pb-2 text-destructive font-semibold">
            Expert Instructors
          </p>
          <h2 className="text-2xl md:text-3xl">700</h2>
        </div>
        <div className="flex-1">
          <p className="text-lg md:text-xl pb-2 text-destructive font-semibold">
            Certified
          </p>
          <h2 className="text-2xl md:text-3xl pb-5">20,000+</h2>
          <p className="text-lg md:text-xl pb-2 text-destructive font-semibold">
            Skilled Mentors
          </p>
          <h2 className="text-2xl md:text-3xl pb-5">500</h2>
        </div>
        <div className="flex-1">
          <p className="text-lg md:text-xl pb-2 text-destructive font-semibold">
            Skillful Courses
          </p>
          <h2 className="text-2xl md:text-3xl">1,000</h2>
        </div>
      </div>
    </section>
  );
};

export default AchievmentSection;
