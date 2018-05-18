import { FindUsModule } from './find-us.module';

describe('FindUsModule', () => {
    let findUsModule: FindUsModule;

    beforeEach(() => {
        findUsModule = new FindUsModule();
    });

    it('should create an instance', () => {
        expect(findUsModule).toBeTruthy();
    });
});
