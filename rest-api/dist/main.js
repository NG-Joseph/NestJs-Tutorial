"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_exception_1 = require("./filters/validation-exception");
const validation_pipe_1 = require("./pipes/validation.pipe");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new validation_exception_1.ValidationExceptionFilter());
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe);
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map