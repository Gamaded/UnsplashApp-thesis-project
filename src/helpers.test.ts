import { getCreationDate } from "./helpers";

test("expect to return date", () => {
    expect(getCreationDate("2020-07-01T18:31:27-04:00")).toBe("01 Июля 2020");
    expect(getCreationDate("")).toBe("Invalid date");
});

export default {};
